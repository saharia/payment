import { 
  Action,
  AuthMicroServiceModule,
  NatMicroServiceModule,
  Role,
  User
} from '@brightauto/api-models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAdminController } from './admin.controller';
import { UserAdminService } from './admin.service';

@Module({
  imports: [
    NatMicroServiceModule,
    AuthMicroServiceModule,
    TypeOrmModule.forFeature([
      User,
      Role,
      Action,
    ])
  ],
  controllers: [UserAdminController],
  providers: [
    UserAdminService,
  ],
  exports: [
    
  ]
})
export class UserAdminModule {}
