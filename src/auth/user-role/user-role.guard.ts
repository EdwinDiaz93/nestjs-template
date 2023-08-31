import { Reflector } from '@nestjs/core';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { MetaInfo } from '../../common/models'

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const validRoles: string[] = this.reflector.get(MetaInfo.roles, context.getHandler());

    // get user
    const req = context.switchToHttp().getRequest();
    const user = req.user;
    

    const hasRole = user.roles.some(rol => validRoles.includes(rol.name))

    return hasRole;
  }
}
