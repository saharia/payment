import {
  Action,
  Role,
  User,
  AuthMicroServiceModule,
  NatMicroServiceModule
} from '@brightauto/api-models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserClientController } from './client.controller';
import { UserClientService } from './client.service';

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
  controllers: [UserClientController],
  providers: [
    UserClientService,
  ],
  exports: [
    
  ]
})
export class UserClientModule {}
