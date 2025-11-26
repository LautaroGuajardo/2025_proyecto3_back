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
import SubAreaService from './subarea.service';
import { CreateSubAreaDto } from './dto/create-subarea.dto';

@Controller('subareas')
export class SubAreaController {
  constructor(private readonly service: SubAreaService) {}

  @Post()
  async create(@Body() dto: CreateSubAreaDto) {
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
    @Body() dto: Partial<CreateSubAreaDto>,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

export default SubAreaController;
