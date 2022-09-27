import { offsetFromRoot, Tree } from '@nrwl/devkit';

export function getRootTsConfigPathInTree(tree: Tree): string | null {
  for (const path of ['tsconfig.base.json', 'tsconfig.json']) {
    if (tree.exists(path)) {
      return path;
    }
  }

  return 'tsconfig.base.json';
}

export function getRelativePathToRootTsConfig(tree: Tree, targetPath: string): string {
  return offsetFromRoot(targetPath) + getRootTsConfigPathInTree(tree);
}
