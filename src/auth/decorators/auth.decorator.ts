import { UseGuards, applyDecorators } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"
import { ValidRoles } from '../../common/models'
import { RoleProtected } from "./"
import { UserRoleGuard } from "../user-role"


export const Auth = (...roles: ValidRoles[]) => {
    return applyDecorators(
        RoleProtected(...roles),//hace un set metadata
        UseGuards(AuthGuard(), UserRoleGuard),//utiliza el auth guard y luego el guard de roles donde legara la metadata
    )
}