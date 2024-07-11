import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PreinscripcionesService } from 'src/services/preinscripciones.service';
import { PreinscripcionesDto } from 'src/models/preincripciones.dtoSchema';

@ApiTags('preinscripciones')
@Controller('preinscripciones')
export class PreinscripcionesController {
    constructor(
        private readonly preinscripcionesService: PreinscripcionesService
    ){}

    @Post()
    async post(@Res() res, @Body() preinscripcionesDto: PreinscripcionesDto) {
        this.preinscripcionesService.post(preinscripcionesDto).then(preinscripciones => {
            res.status(HttpStatus.CREATED).json({
                Success: true,
                Status: HttpStatus.CREATED,
                Message: 'Registration successful',
                Data: preinscripciones
            })
        }).catch(error => {
            res.status(HttpStatus.BAD_REQUEST).json({
                Success: false,
                Status: HttpStatus.BAD_REQUEST,
                Message: 'Error service Post: The request contains an incorrect data type or an invalid parameter',
                Data: error.message
            })
        });
    }
}
