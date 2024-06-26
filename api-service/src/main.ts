import { NestFactory } from '@nestjs/core';
import { graphqlUploadExpress } from 'graphql-upload';
import { AppModule } from './app.module';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(graphqlUploadExpress({ maxFileSize: 10000000000, maxFiles: 10 }));

  await app.startAllMicroservices();

  await app.listen(3002);
}
bootstrap();
