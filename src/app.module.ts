import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandsModule } from './brands/brands.module';
import { UsersModule } from './users/users.module';



//  MongooseModule.forRoot('mongodb://localhost/nest'),
//   CarsModule,
@Module({
  imports: [ 
    CarsModule, BrandsModule, UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
