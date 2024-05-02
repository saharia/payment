import {
  CommonModule,
  ConfigurationModule,
  JSONObjectScalar,
  NatMicroServiceModule,
} from '@brightauto/api-models';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActionResolver } from './authentication/action.resolver';
import { AuthResolver } from './authentication/auth.resolver';
import { RoleResolver } from './authentication/role.resolver';
import { UserAdminResolver } from './authentication/user-admin.resolver';
import { UserClientResolver } from './authentication/user-client.resolver';
import { OrderPaymentResolver } from './external-api/order-payment.resolver';
import { BrandResolver } from './payment/brand.resolver';
import { PaymentGatewayPlanResolver } from './payment/payment-gateway-plan.resolver';
import { PaymentGatewayResolver } from './payment/payment-gateway.resolver';
import { PaymentPlanResolver } from './payment/payment-plan.resolver';
import { PaymentResolver } from './payment/payment.resolver';
import { WidgetResolver } from './payment/widget.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy, AllEntities } from '@brightauto/api-models';
@Module({
  imports: [
    NatMicroServiceModule,
    ConfigurationModule,
    CommonModule,
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
        entities: AllEntities,
        namingStrategy: new SnakeNamingStrategy(),
        migrations: [
          __dirname + '../../node_modules/@brightauto/api-models/dist/database/migration/**/*.{ts,js}'
        ],
        migrationsTableName: configService.get('TABLE_PREFIX') + configService.get('MIGRATIONS_TABLE_NAME'),
        migrationsRun: true,
        synchronize: false
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      installSubscriptionHandlers: true,
      // debug: false,
      buildSchemaOptions: {
        dateScalarMode: 'isoDate',
      },
      /* formatResponse: (response, requestContext) => {
        if(response.errors?.length) {
          console.log("test")
          response['message'] = response.errors[0]?.message || 'Some server problem';
        }
        console.log(response);
        return response;
      }, */
      formatError: (formattedError) => {
        try {
          
          console.log("formattedError", formattedError);
          if (formattedError?.extensions?.code === 'BAD_USER_INPUT' && formattedError.message) {
            let message = formattedError.message.match(new RegExp(/( }; Field ")(.*)/gm));
            return {
              ...formattedError,
              message: message[0] ? message[0].replace(' }; Field ', '') : formattedError.message,
            };
          }
          if(formattedError?.extensions?.exception && formattedError?.extensions?.exception['thrownValue']) {
            if(formattedError.extensions.exception['thrownValue']['code'] == 400) {
              formattedError.extensions.code = 'BAD_USER_INPUT';
              // formattedError.message = 'Bad Request Exception';
              formattedError.extensions.exception = formattedError.extensions.exception['thrownValue'];
            }
            if(formattedError.extensions.exception['thrownValue']['code'] == 500) {
              formattedError.extensions.code = 'BAD_USER_INPUT';
              // formattedError.message = formattedError.extensions.exception['thrownValue'].message;
              formattedError.extensions.exception = formattedError.extensions.exception['thrownValue'];
            }
            if(formattedError.extensions.exception['thrownValue']['code'] == 401) {
              formattedError.extensions.code = 'Unauthorized';
              // formattedError.message = 'Unauthorized';
              formattedError.extensions.exception = formattedError.extensions.exception['thrownValue'];
            }
            // console.log(formattedError.extensions.exception['thrownValue']);
          }
          return formattedError;
        } catch (error) {
          // console.log(error);
          return formattedError;
        }
        
        // Otherwise return the formatted error. This error can also
        // be manipulated in other ways, as long as it's returned.
      },
      context: ({ req, res }) => ({ req, res }),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      // typePaths: ['./**/*.graphql'],
      /* resolvers: {
        Address: AddressesResolver
      }, */
    }),
    /* GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [
        //Pino logger.
        // LoggerModule,
        ConfigurationModule,
      ],
      useFactory: async (configService: ConfigService): Promise<ApolloDriverConfig> => ({
        driver: ApolloFederationDriver,
        autoSchemaFile: true,
        path: '/',
        // subscriptions: '/',
        // typePaths: ['./.graphql'],
        resolvers: {
          Address: AddressesResolver
        },
        // definitions: {
        //   path: join(__dirname, 'graphql.ts')
        // },
        // logger,
        debug: true,
        cors: false,
        installSubscriptionHandlers: true,
        playground: {
          endpoint: '/',
          subscriptionEndpoint: '/',
          settings: {
            'request.credentials': 'include'
          },
          // tabs: [
          //   {
          //     name: 'GraphQL API',
          //     endpoint: '/',
          //     query: playgroundQuery
          //   }
          // ]
        },
        context: ({ req, res }): any => ({ req, res })
      }),
      inject: [
        ConfigService
      ]
    }) */
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UserClientResolver,
    UserAdminResolver,
    AuthResolver,
    RoleResolver,
    WidgetResolver,
    BrandResolver,
    PaymentGatewayResolver,
    PaymentPlanResolver,
    PaymentResolver,
    JSONObjectScalar,
    ActionResolver,
    PaymentGatewayPlanResolver,

    OrderPaymentResolver
  ],
})
export class AppModule {}
