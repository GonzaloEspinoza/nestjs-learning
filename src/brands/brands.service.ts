import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {


  private newBrands:Brand[] = [
    {
      id:'1',
      name:'toyota',
      createdAt:new Date().getTime()
    }
  ]

  create(createBrandDto: CreateBrandDto) {

    const brand:Brand={
      id:'2',
      name:createBrandDto.name,
      createdAt:new Date().getTime()
    }

    this.newBrands.push(brand)
    return 'This action adds a new brand';
  }

  findAll() {
    return this.newBrands;
    // return `This action returns all brands`;
  }

  findOne(id: number) {
    return `This action returns a #${id} brand`;
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
