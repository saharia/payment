import { 
  SnakeNamingStrategy,
  ConfigurationModule,
  AuthMicroServiceModule
} from '@brightauto/api-models';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { UserClientModule } from './user/client/client.module';
import { UserAdminModule } from './user/admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { authenticationEntities } from './authentication-entities';
import { ActionModule } from './action/action.module';

@Module({
  imports: [
    UserAdminModule,
    UserClientModule,
    AuthModule,
    RoleModule,
    ActionModule,
    AuthMicroServiceModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        entityPrefix: configService.get('TABLE_PREFIX'),
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: authenticationEntities,
        namingStrategy: new SnakeNamingStrategy()
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
