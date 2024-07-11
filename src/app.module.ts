import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PreinscripcionesController } from './controllers/preinscripciones/preinscripciones.controller';
import { TipoEstadoController } from './controllers/tipo_estado/tipo_estado.controller';
import { PreinscripcionesService } from './services/preinscripciones/preinscripciones.service';
import { TipoEstadoService } from './services/tipo_estado/tipo_estado.service';

@Module({
  imports: [],
  controllers: [AppController, PreinscripcionesController, TipoEstadoController],
  providers: [AppService, PreinscripcionesService, TipoEstadoService],
})
export class AppModule {}
