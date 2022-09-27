export const TYPE_TAG_PREFIX = 'type:';

export const CORE_TAG_PREFIX = 'core:';

export const PROJECT_TYPE = {
  feature: 'feature',
  stateMnagement: 'state-management',
  util: 'util',
  ui: 'ui',
  vendor: 'vendor',
  service: 'service',
} as const;

export const PROJECT_TAG = {
  feature: `${TYPE_TAG_PREFIX}feature`,
  stateMnagement: `${TYPE_TAG_PREFIX}state-management`,
  util: `${TYPE_TAG_PREFIX}util`,
  ui: `${TYPE_TAG_PREFIX}ui`,
  vendor: `${TYPE_TAG_PREFIX}feature`,
  service: `${TYPE_TAG_PREFIX}feature`,
} as const;

export type PROJECT_TAG = typeof PROJECT_TAG[keyof typeof PROJECT_TAG];
