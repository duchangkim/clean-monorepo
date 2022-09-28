export const TYPE_TAG_PREFIX = 'type:';

export const CORE_TAG_PREFIX = 'core:';

export const PROJECT_TYPE = {
  page: 'page',
  feature: 'feature',
  vendor: 'vendor',
  service: 'service',
  stateManagement: 'state-management',
  util: 'util',
  ui: 'ui',
} as const;

export const PROJECT_TAG = {
  page: `${TYPE_TAG_PREFIX}feature`,
  feature: `${TYPE_TAG_PREFIX}feature`,
  vendor: `${TYPE_TAG_PREFIX}feature`,
  service: `${TYPE_TAG_PREFIX}feature`,
  stateManagement: `${TYPE_TAG_PREFIX}state-management`,
  util: `${TYPE_TAG_PREFIX}util`,
  ui: `${TYPE_TAG_PREFIX}ui`,
} as const;

export type PROJECT_TYPE = typeof PROJECT_TYPE[keyof typeof PROJECT_TYPE];
export type PROJECT_TAG = typeof PROJECT_TAG[keyof typeof PROJECT_TAG];
