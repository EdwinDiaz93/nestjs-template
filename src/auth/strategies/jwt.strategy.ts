import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ConfigService } from "@nestjs/config";

import { ExtractJwt, Strategy } from "passport-jwt";

import { JwtPayload } from "../interfaces";
import { UsersService } from "../../users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        private readonly userService: UsersService,
        configService: ConfigService,
    ) {
        super({
            secretOrKey: configService.get('JWT_SECRET'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        })
    }

    async validate(payload: JwtPayload) {
        const { id } = payload;

        const user = await this.userService.findOne(id);

        if (!user) throw new UnauthorizedException('Invalid token');

        return user;
    }


}