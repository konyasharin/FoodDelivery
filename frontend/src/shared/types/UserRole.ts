export const ROLES = {
  ADMIN: 'ADMIN',
  DELIVERYMAN: 'DELIVERYMAN',
  COOK: 'COOK',
  USER: 'USER',
} as const;

export type UserRole = keyof typeof ROLES;
