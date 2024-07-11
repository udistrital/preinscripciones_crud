import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";

export class PreinscripcionesDto{
    readonly _id: ObjectId

    @ApiProperty()
    readonly Id_estudiante: number

    @ApiProperty()
    readonly Id_espacio_academico: ObjectId

    @ApiProperty()
    readonly Id_periodo: number

    @ApiProperty()
    readonly Id_proyecto: number

    @ApiProperty()
    Activo: boolean

    @ApiProperty()
    Id_tipo_estado: ObjectId

    @ApiProperty()
    Fecha_creacion: Date

    @ApiProperty()
    Fecha_modificacion: Date

}

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: 'preinscripciones' })
export class Preinscripciones extends Document {
    _id: ObjectId;

    @Prop({ required: true })
    Id_estudiante: number

    @Prop({ required: true })
    Id_espacio_academico: ObjectId

    @Prop({ required: true })
    Id_periodo: number

    @Prop({ required: true })
    Id_proyecto: number;

    @Prop({ required: true })
    Activo: boolean;

    @Prop({ required: true })
    Id_tipo_estado: ObjectId

    @Prop({ required: true })
    Fecha_creacion: Date;

    @Prop({ required: true })
    Fecha_modificacion: Date;
}