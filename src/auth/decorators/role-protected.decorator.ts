import { SetMetadata } from '@nestjs/common';
import { MetaInfo, ValidRoles } from '../../common/models';

export const RoleProtected = (...args: ValidRoles[]) => {    
    return SetMetadata(MetaInfo.roles, args);
}