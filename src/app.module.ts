import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandsModule } from './brands/brands.module';
import { UsersModule } from './users/users.module';
import { SeedModule } from './seed/seed.module';



//  MongooseModule.forRoot('mongodb://localhost/nest'),
//   CarsModule,
@Module({
  imports: [ 
    CarsModule, BrandsModule, UsersModule, SeedModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
