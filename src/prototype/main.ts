// TODO: реалізуйте приклад тут

import { UserProfile } from './UserProfile';

const chief = new UserProfile('Frank Job', 'Finance', {
  canEdit: true,
  canDelete: true,
  canInvite: true,
  systemInternal: true,
});

const deputy = chief.clone();
deputy.username = 'Robin Moore';
deputy.permissions.canDelete = false;

console.log(chief.username);                    
console.log(deputy.username);                  
console.log(chief.permissions.canDelete);       
console.log(deputy.permissions.canDelete);    