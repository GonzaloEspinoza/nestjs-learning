import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandsModule } from './brands/brands.module';



//  MongooseModule.forRoot('mongodb://localhost/nest'),
//   CarsModule,
@Module({
  imports: [ 
    CarsModule, BrandsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
