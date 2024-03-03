import { User } from '@app/common';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

import { TokenPayload } from '../types/token-payload.type';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: User, response: Response) {
    const tokenPayload: TokenPayload = {
      userId: user._id.toString(),
    };

    const expires = new Date();
    expires.setSeconds(
      expires.getSeconds() +
        this.configService.get<number>('JWT_EXPIRATION_TIME'),
    );

    const token = this.jwtService.sign(tokenPayload);

    response.cookie('Authentication', token, {
      expires: expires,
      httpOnly: true,
    });
  }
}
