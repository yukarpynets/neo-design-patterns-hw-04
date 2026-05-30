// TODO: реалізуйте клас або інтерфейс тут

import { UserProfilePrototype } from './UserProfilePrototype';

interface Permissions {
  canEdit: boolean;
  canDelete: boolean;
  canInvite: boolean;
  systemInternal: boolean;
}

export class UserProfile implements UserProfilePrototype {
  constructor(
    public username: string,
    public department: string,
    public permissions: Permissions
  ) {}

  clone(): UserProfile {
    return new UserProfile(
      this.username,
      this.department,
      { ...this.permissions } 
    );
  }
}