import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'All Movies';
  }
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `Return One Movie id: ${id}`;
  }

  @Post()
  create() {
    return 'Create movie';
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `Remove movie : ${id}`;
  }

  @Patch('/:id')
  updateOne(@Param('id') id: string) {
    return `Update one id : ${id}`;
  }

  @Put()
  updateAll() {
    return 'All update';
  }
}
