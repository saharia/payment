import {
  Action,
  ColumnExistsRule,
  jwtFactory,
  Role,
  User
} from '@brightauto/api-models';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync(jwtFactory),
    TypeOrmModule.forFeature([
      User,
      Role,
      Action
    ])
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    ColumnExistsRule
  ],
})
export class AuthModule {}
