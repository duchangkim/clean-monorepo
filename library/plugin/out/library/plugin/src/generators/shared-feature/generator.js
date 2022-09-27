"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const path = require("path");
function normalizeOptions(tree, options) {
    const name = (0, devkit_1.names)(options.name).fileName;
    const projectDirectory = options.directory
        ? `${(0, devkit_1.names)(options.directory).fileName}/${name}`
        : name;
    const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
    const projectRoot = `${(0, devkit_1.getWorkspaceLayout)(tree).libsDir}/${projectDirectory}`;
    const parsedTags = options.tags
        ? options.tags.split(',').map((s) => s.trim())
        : [];
    return Object.assign(Object.assign({}, options), { projectName,
        projectRoot,
        projectDirectory,
        parsedTags });
}
function addFiles(tree, options) {
    const templateOptions = Object.assign(Object.assign(Object.assign({}, options), (0, devkit_1.names)(options.name)), { offsetFromRoot: (0, devkit_1.offsetFromRoot)(options.projectRoot), template: '' });
    (0, devkit_1.generateFiles)(tree, path.join(__dirname, 'files'), options.projectRoot, templateOptions);
}
function default_1(tree, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const normalizedOptions = normalizeOptions(tree, options);
        (0, devkit_1.addProjectConfiguration)(tree, normalizedOptions.projectName, {
            root: normalizedOptions.projectRoot,
            projectType: 'library',
            sourceRoot: `${normalizedOptions.projectRoot}/src`,
            targets: {
                build: {
                    executor: "@peterpan/plugin:build",
                },
            },
            tags: normalizedOptions.parsedTags,
        });
        addFiles(tree, normalizedOptions);
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.default = default_1;
//# sourceMappingURL=generator.js.map