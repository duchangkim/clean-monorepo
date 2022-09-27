export const TYPE_TAG_PREFIX = 'type:';

export const CORE_TAG_PREFIX = 'core:';

export const PROJECT_TAG = {
  feature: `${TYPE_TAG_PREFIX}feature`,
  stateMnagement: `${TYPE_TAG_PREFIX}state-management`,
  util: `${TYPE_TAG_PREFIX}util`,
  ui: `${TYPE_TAG_PREFIX}ui`,
  core: `${CORE_TAG_PREFIX}domain`,
  repository: `${CORE_TAG_PREFIX}repository`,
  di: `${CORE_TAG_PREFIX}di`,
} as const;

type PROJECT_TAG = typeof PROJECT_TAG[keyof typeof PROJECT_TAG];
