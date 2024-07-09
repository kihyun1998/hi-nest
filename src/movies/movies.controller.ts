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
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMoiveDto as CreateMovieDto } from './dto/create_movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  //:id보다 위에있어야한다.
  // 그렇게 하지 않으면 search를 id로 판단한다.
  @Get('/search')
  search(@Query('year') year: string) {
    return `search year is ${year}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() data: CreateMovieDto) {
    return this.moviesService.create(data);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.moviesService.deleteOne(id);
  }

  @Patch('/:id')
  updateOne(@Param('id') id: string, @Body() updateData) {
    return this.moviesService.update(id, updateData);
  }

  @Put()
  updateAll() {
    return 'All update';
  }
}
