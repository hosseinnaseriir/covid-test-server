/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { LocalStrategy } from './local.strategy';
import { UserJwtGuard } from '../../guards';
import { PassportModule } from '@nestjs/passport';
import { User } from '../../models';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  ConfigModule.forRoot(),
    PassportModule,
  JwtModule.registerAsync({
    imports: [ConfigModule],
    useFactory: async (_configService: ConfigService) => ({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
    inject: [ConfigService],
  }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    LocalStrategy,
    {
      provide: APP_GUARD,
      useClass: UserJwtGuard,
    },
  ],
  controllers: [AuthController],
  exports: [JwtModule, AuthService],
})
export class AuthModule { }