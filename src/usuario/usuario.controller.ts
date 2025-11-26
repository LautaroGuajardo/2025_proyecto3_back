import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import UsuarioService from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly service: UsuarioService) {}

  @Post()
  async create(@Body() dto: CreateUsuarioDto) {
    try {
      return await this.service.createUsuario(dto);
    } catch (err: unknown) {
      const message =
        typeof err === 'string'
          ? err
          : err instanceof Error
            ? err.message
            : 'Error';
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async list() {
    return this.service.listAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}

export default UsuarioController;
