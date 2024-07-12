import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";

export class TipoEstadoDto{
    readonly _id: ObjectId

    @ApiProperty()
    readonly Nombre: string

    @ApiProperty()
    Activo: boolean

    @ApiProperty()
    Fecha_creacion: Date

    @ApiProperty()
    Fecha_modificacion: Date

}

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: 'preinscripciones' })
export class TipoEstado extends Document {
    _id: ObjectId;

    @Prop({ required: true })
    Nombre: string

    @Prop({ required: true })
    Activo: boolean

    @Prop({ required: true })
    Fecha_creacion: Date

    @Prop({ required: true })
    Fecha_modificacion: Date
}

export const TipoEstadoSchema = SchemaFactory.createForClass(TipoEstado)