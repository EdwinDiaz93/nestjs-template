import { Repository } from 'typeorm';

import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { PassportStrategy } from "@nestjs/passport";
import { ConfigService } from "@nestjs/config";

import { ExtractJwt, Strategy } from "passport-jwt";

import { JwtPayload } from "../interfaces";
import { User } from "../../users/entities";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        configService: ConfigService,
    ) {
        super({
            secretOrKey: configService.get('JWT_SECRET'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        })
    }

    async validate(payload: JwtPayload) {
        const { id } = payload;

        const user = await this.userRepository.findOneBy({ id });

        if (!user) throw new UnauthorizedException('Invalid token');

        const roles = await user.roles;

        return {
            ...user,
            roles,
        };
    }


}