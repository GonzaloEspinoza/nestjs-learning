import { Injectable } from '@nestjs/common';
import { BRANDS_SEED } from './data/brands.seed';
import { CARDS_SEED } from './data/cards.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly cardServices:CarsService,
    private readonly brandsSerive:BrandsService
  ){}

  populatedDB() {
    // return `run seed popullated`;
    return this.cardServices.getAll()
    // return ' df'
  }

  populateBrandDB(){
    // return this.brandsSerive.findAll()
    return this.brandsSerive.findAll()
  }

}
