import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PreinscripcionesController } from './controllers/preinscripciones.controller';
import { TipoEstadoController } from './controllers/tipo_estado.controller';
import { PreinscripcionesService } from './services/preinscripciones.service';
import { TipoEstadoService } from './services/tipo_estado.service';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './config/configuration';
import { Preinscripciones, PreinscripcionesSchema } from './models/preincripciones.dtoSchema';
import { TipoEstado, TipoEstadoSchema } from './models/tipo_estado.dtoSchema';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${environment.USER}:${environment.PASS}@` +
      `${environment.HOST}:${environment.PORT}/${environment.DB}?authSource=${environment.AUTH_DB}`),
    MongooseModule.forFeature([
      { name: Preinscripciones.name, schema: PreinscripcionesSchema },
      { name: TipoEstado.name, schema: TipoEstadoSchema }
    ])
  ],
  controllers: [AppController, PreinscripcionesController, TipoEstadoController],
  providers: [AppService, PreinscripcionesService, TipoEstadoService],
})
export class AppModule { }
