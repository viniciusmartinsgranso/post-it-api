import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { environment } from './environment/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle(environment.SWAGGER_TITLE)
    .setDescription('A API do Post-it')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  app.useGlobalPipes(new ValidationPipe());

  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
