import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix('api');
  
  
  const config = new DocumentBuilder()
  .setTitle("Lesson api")
  .setDescription("This api for lesson")
  .setVersion("1.0")
  .addTag('API')
  .build()
  const  document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)
  await app.listen(port);
}
bootstrap();
