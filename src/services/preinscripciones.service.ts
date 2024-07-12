import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Preinscripciones as MainModel, PreinscripcionesDto as MainDto } from 'src/models/preincripciones.dtoSchema';
import { TipoEstado } from 'src/models/tipo_estado.dtoSchema';
@Injectable()
export class PreinscripcionesService {

    constructor(
        @InjectModel(MainModel.name)
        private readonly mainModel: Model<MainModel>,

        // ? inyectar modelos relacionados para verificar existencia y popular
        @InjectModel(TipoEstado.name)
        private readonly tipoEstadoModel: Model<TipoEstado>
    ) { }

      /**
     * Revisa si los _ids de las colecciones relacionadas existen.
     * Detiene el post o put si no hay concordancia.
     * ? Agregar demás comprobaciones si se añaden más relaciones.
     * @param mainDto - modelo dto que se desea verificar.
     */
      private async checkRelated(mainDto: MainDto) {
        if (mainDto.Id_tipo_estado) {
            const tipoEstadoId = await this.tipoEstadoModel.exists({ _id: mainDto.Id_tipo_estado });
            if (!tipoEstadoId) {
                throw new Error(`HorarioId: ${mainDto.Id_tipo_estado} doesn't exist`);
            }
        }
    }

    /**
    * Retorna la lista de colecciones a popular segun relación con la coleción actual.
    * ? Agregar aquí si se relacionan más colecciones.
    */
    private populatefields(): any[] {
        return [
            { path: TipoEstado.name + 'Id' },
        ]
    }

    // ? funciones REST generalizadas
    async post(mainDto: MainDto): Promise<MainDto> {
        const dateNow = new Date();
        const newdoc = new this.mainModel(mainDto);
        newdoc.Fecha_creacion = dateNow;
        newdoc.Fecha_modificacion = dateNow;
        await this.checkRelated(newdoc);
        return await newdoc.save();
    }

    



}
