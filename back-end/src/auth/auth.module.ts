import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';

import { AuthService } from './auth/auth.service';
import { GoogleStrategy } from './auth/google.strategy';


@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    GoogleStrategy
  ]
})
export class AuthModule {}