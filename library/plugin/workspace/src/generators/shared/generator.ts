import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  GeneratorCallback,
  getWorkspaceLayout,
  joinPathFragments,
  names,
  offsetFromRoot,
  Tree,
  updateProjectConfiguration,
  readProjectConfiguration,
} from '@nrwl/devkit';
import { lintProjectGenerator, Linter } from '@nrwl/linter';
import { jestProjectGenerator } from '@nrwl/jest';
import * as path from 'path';
import { SharedGeneratorSchema } from './schema';
import { runTasksInSerial } from '../../utils/runTasksInSerial';
import { getRelativePathToRootTsConfig } from '../../utils/typescript';
import { PROJECT_TAG } from '../../projectTag';

interface NormalizedSchema extends SharedGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
  fileName: string;
}

// camelCase로 변환
function convertToCamelCase(string: string) {
  return names(string).propertyName;
}

function getProjectDefaultTag(libraryType: string): PROJECT_TAG {
  return PROJECT_TAG[libraryType];
}

function getProjectDirectory(libraryType: string, name: string) {
  return joinPathFragments('shared', libraryType, name);
}

function normalizeOptions(tree: Tree, options: SharedGeneratorSchema): NormalizedSchema {
  const { libraryType } = options;

  const defaultTags = [getProjectDefaultTag(libraryType)];
  const fileName = convertToCamelCase(options.name);
  const name = names(options.name).fileName;
  const projectDirectory = getProjectDirectory(libraryType, name);
  const projectName = projectDirectory.replace(/\//g, '-');
  const projectRoot = `${getWorkspaceLayout(tree).libsDir}/${projectDirectory}`;
  const parsedTags = options.tags
    ? options.tags
        .split(',')
        .map((s) => s.trim())
        .concat(defaultTags)
    : defaultTags;

  return {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
    fileName,
    libraryType,
  };
}

function addFiles(tree: Tree, normalizedOptions: NormalizedSchema) {
  const templateOptions = {
    ...normalizedOptions,
    ...names(normalizedOptions.name),
    offsetFromRoot: offsetFromRoot(normalizedOptions.projectRoot),
    rootTsConfigPath: getRelativePathToRootTsConfig(tree, normalizedOptions.projectRoot),
    template: '',
    dot: '.',
    cliCommand: 'nx',
  };

  generateFiles(tree, path.join(__dirname, 'files/template'), normalizedOptions.projectRoot, templateOptions);
}

function addProject(tree: Tree, normalizedOptions: NormalizedSchema) {
  const isStandaloneProject = true;

  addProjectConfiguration(
    tree,
    normalizedOptions.projectName,
    {
      root: normalizedOptions.projectRoot,
      projectType: 'library',
      sourceRoot: joinPathFragments(normalizedOptions.projectRoot, 'src'),
      targets: {
        lint: {
          executor: '@nrwl/linter:eslint',
        },
      },
      tags: normalizedOptions.parsedTags,
    },
    isStandaloneProject,
  );
}

async function addJest(tree: Tree, normalizedOptions: NormalizedSchema): Promise<GeneratorCallback> {
  return await jestProjectGenerator(tree, {
    ...normalizedOptions,
    project: normalizedOptions.projectName,
    setupFile: 'none',
    supportTsx: true,
    babelJest: true,
    skipSerializers: true,
    testEnvironment: 'node',
    skipFormat: true,
  });
}

function addEsLint(tree: Tree, normalizedOptions: NormalizedSchema): Promise<GeneratorCallback> {
  return lintProjectGenerator(tree, {
    project: normalizedOptions.projectName,
    linter: Linter.EsLint,
    skipFormat: true,
    tsConfigPaths: [joinPathFragments(normalizedOptions.projectRoot, 'tsconfig.lib.json')],
  });
}

function updateProjectEsLintConfiguration(tree: Tree, normalizedOptions: NormalizedSchema) {
  const projectConfiguration = readProjectConfiguration(tree, normalizedOptions.projectName);
  projectConfiguration.targets.lint.options = {
    fix: true,
    cache: true,
    eslintConfig: joinPathFragments(normalizedOptions.projectRoot, '.eslintrc.json'),
    lintFilePatterns: [`${normalizedOptions.projectRoot}/**/*.{ts,json}`],
  };

  updateProjectConfiguration(tree, normalizedOptions.projectName, projectConfiguration);
}

async function libraryGenerator(tree: Tree, options: SharedGeneratorSchema) {
  const tasks: GeneratorCallback[] = [];
  const normalizedOptions = normalizeOptions(tree, options);

  addFiles(tree, normalizedOptions);
  addProject(tree, normalizedOptions);
  const esLintCallback = await addEsLint(tree, normalizedOptions);
  const jestCallback = await addJest(tree, normalizedOptions);
  await formatFiles(tree);

  tasks.push(esLintCallback, jestCallback);

  updateProjectEsLintConfiguration(tree, normalizedOptions);

  return runTasksInSerial(...tasks);
}

export default libraryGenerator;
