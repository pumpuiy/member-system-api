import { Body, Controller, Get, Post } from '@nestjs/common';
import { now } from 'mongoose';
import { CreateCatDto } from '../models/create-cat.dto';
import { CatsService } from '../services/cats.service';


@Controller("cat")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Post()
  createItem(@Body() createCatDto: CreateCatDto) {
    createCatDto = new CreateCatDto();
    createCatDto.age = Math.random();
    createCatDto.name = ""+new Date();
    this.catsService.create(createCatDto);
  }
}
