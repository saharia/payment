import { Action, AuthMicroServiceModule, NatMicroServiceModule, Role, User } from '@brightauto/api-models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  imports: [
    NatMicroServiceModule,
    AuthMicroServiceModule,
    TypeOrmModule.forFeature([
      Role,
      User,
      Action
    ])
  ],
  controllers: [RoleController],
  providers: [
    RoleService,
  ]
})
export class RoleModule {}
