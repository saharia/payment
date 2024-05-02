import { 
  ConfigurationModule,
  SnakeNamingStrategy
} from '@brightauto/api-models';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandModule } from './brand/brand.module';
import { PaymentGatewayPlanModule } from './payment-gateway-plan/payment-gateway-plan.module';
import { PaymentGatewayModule } from './payment-gateway/payment-gateway.module';
import { PaymentPlanModule } from './payment-plan/payment-plan.module';
import { paymentEntities } from './payment.entities';
import { WidgetModule } from './widget/widget.module';

@Module({
  imports: [
    PaymentPlanModule,
    PaymentGatewayModule,
    BrandModule,
    WidgetModule,
    PaymentGatewayPlanModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        entityPrefix: configService.get('TABLE_PREFIX'),
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: paymentEntities,
        namingStrategy: new SnakeNamingStrategy()
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
