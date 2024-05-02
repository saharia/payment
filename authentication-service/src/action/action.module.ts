import { 
  AuthMicroServiceModule,
  Role,
  User,
  Action,
  RelationExistsRule,
  ColumnExistsRule,
  NatMicroServiceModule
} from '@brightauto/api-models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionController } from './action.controller';
import { ActionService } from './action.service';

@Module({
  imports: [
    NatMicroServiceModule,
    AuthMicroServiceModule,
    TypeOrmModule.forFeature([
      Role,
      User,
      Action,
    ])
  ],
  controllers: [ActionController],
  providers: [
    ActionService,
    RelationExistsRule,
    ColumnExistsRule
  ]
})
export class ActionModule {}
