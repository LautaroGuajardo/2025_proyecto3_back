import {
  Controller,
  Post,
  Body,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import ClienteService from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly service: ClienteService) {}

  @Post()
  async create(@Body() dto: CreateClienteDto): Promise<any> {
    try {
      const created = (await this.service.createCliente(
        dto,
      )) as unknown as CreateClienteDto;
      return created;
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
}

export default ClienteController;
