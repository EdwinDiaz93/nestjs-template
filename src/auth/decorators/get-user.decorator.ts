import { BadRequestException, ExecutionContext, createParamDecorator } from "@nestjs/common";


export const GetUser = createParamDecorator(
    (data: any, ctx: ExecutionContext) => {
        const req = ctx.switchToHttp().getRequest();
        const user = req.user;

        if (!user) throw new BadRequestException('user not found in the request');

        if (data && user[data]) return user[data];        
        else return user;
    }
)