import {
  MicroServiceExceptionFilter,
  natConfiguration
} from '@brightauto/api-models';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { useContainer, ValidationError } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {

  // console.log(process.env);
  const natMicroServiceConfiguration = natConfiguration(process.env.NAT_SERVERS);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, natMicroServiceConfiguration);

  app.useGlobalPipes(
    new ValidationPipe({
      validationError: {
        target: false,
        value: false
      },
      // transform: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        // console.log("validation error", validationErrors);
        // let response = { isValidationError: true, response: instanceToPlain(validationErrors) };
        // return throwError(() => response);
        return new BadRequestException(validationErrors);
      }
    }),
  );

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app.useGlobalFilters(new MicroServiceExceptionFilter());
  
  await app.listen();
}
bootstrap();
