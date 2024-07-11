import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Preinscripciones as MainModel, PreinscripcionesDto as MainDto } from 'src/models/preincripciones.dtoSchema';

@Injectable()
export class PreinscripcionesService {

    constructor(
        @InjectModel(MainModel.name)
        private readonly mainModel: Model<MainModel>//,

        // ? inyectar modelos relacionados para verificar existencia y popular
        //@InjectModel(Horario.name)
        //private readonly horarioModel: Model<Horario>
    ) { }

    async post(mainDto: MainDto): Promise<MainDto> {
        const dateNow = new Date();
        const newdoc = new this.mainModel(mainDto);
        newdoc.Fecha_creacion = dateNow;
        newdoc.Fecha_modificacion = dateNow;
        //await this.checkRelated(newdoc);
        return await newdoc.save();
    }



}
