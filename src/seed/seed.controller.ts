import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';
import { Brand } from 'src/brands/entities/brand.entity';



@Controller('seed')
export class SeedController {
  constructor(
    private readonly seedService: SeedService
    ) {}


  @Get()
  runSeed() {
    return this.seedService.populatedDB()
  }

  @Get('/brands')
  brand(){
    return this.seedService.populateBrandDB()
  }

}
