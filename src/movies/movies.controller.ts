import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'All Movies';
  }
  //:id보다 위에있어야한다.
  // 그렇게 하지 않으면 search를 id로 판단한다.
  @Get('/search')
  search(@Query('year') year: string) {
    return `search year is ${year}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `Return One Movie id: ${id}`;
  }

  @Post()
  create(@Body() data) {
    return data;
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `Remove movie : ${id}`;
  }

  @Patch('/:id')
  updateOne(@Param('id') id: string, @Body() updateData) {
    return {
      id: id,
      ...updateData,
    };
  }

  @Put()
  updateAll() {
    return 'All update';
  }
}
