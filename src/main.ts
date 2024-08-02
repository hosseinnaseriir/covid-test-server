import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { CustomValidationPipe } from './custom-validation.pipe';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'api/v',
  });

  app.useGlobalPipes(new CustomValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
