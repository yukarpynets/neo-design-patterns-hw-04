import { AppConfigService } from './singleton/AppConfigService';
import { DocumentBuilder } from './builder/DocumentBuilder';
import { UserProfile } from './prototype/UserProfile';

// Singleton
console.log('=== SINGLETON ===');
const config1 = AppConfigService.getInstance('Acme Inc.', 'Confidential');
const config2 = AppConfigService.getInstance('Another Corp', 'Top Secret');
console.log(config1.companyName);
console.log(config1 === config2);

// Builder
console.log('\n=== BUILDER ===');
const output = new DocumentBuilder()
  .addHeader('ACME Corporation — Report')
  .addBody('Quarterly performance increased by 12%.')
  .addFooter('--- Confidential ---')
  .build();
console.log(output);

// Prototype
console.log('=== PROTOTYPE ===');
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