import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //TODO: This enables all origins. Change this to running port when its production time
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
