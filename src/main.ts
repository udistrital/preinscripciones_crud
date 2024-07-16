import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { environment } from './config/configuration';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Preinscripciones CRUD')
    .setDescription('API para realizar la gestión de preinscripciones a nivel de crud')
    .setVersion('1.0')
    .addTag('preinscripciones')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  fs.writeFileSync('./swagger/swagger.json', JSON.stringify(document, null, 4));
  fs.writeFileSync('./swagger/swagger.yml', yaml.dump(document));
  SwaggerModule.setup('api', app, document);

  await app.listen(parseInt(environment.HTTP_PORT, 10) || 8080);
}
bootstrap();
