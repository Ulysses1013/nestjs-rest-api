import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true })); // dtoに含まれない要素を省く
  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3000'],
  });
  app.use(cookieParser());
  await app.listen(3050);
}
bootstrap();
