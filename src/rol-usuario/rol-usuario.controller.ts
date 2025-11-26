import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import RolUsuarioService from './rol-usuario.service';
import { CreateRolUsuarioDto } from './dto/create-rol-usuario.dto';

@Controller('rol-usuarios')
export class RolUsuarioController {
  constructor(private readonly service: RolUsuarioService) {}

  @Post()
  async create(@Body() dto: CreateRolUsuarioDto) {
    try {
      return await this.service.create(dto);
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

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: Partial<CreateRolUsuarioDto>,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

export default RolUsuarioController;
