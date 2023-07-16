import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Response } from 'express';
import { CreateCarDto } from './dto/create-car.dto';


@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}

    @Get('/')
    carsAll(){  
        console.log('this home cars')
        return this.carsService.getAll()
    }

    @Get('/id=:id')
    showCars(@Param('id') id: string, @Res() res:Response){
        console.log(+id)
        console.log(id)
        const car = this.carsService.findById(id);
        console.log(car )

        if( !car ){
        //  res.status(404).send({code:1,message:'Id no encontrado'})
        console.log('----error-----')
        throw new NotFoundException({code:1, message:'Id no econtrado'})
         return [];
        }
        console.log('----------ooooo')
        return !car?.id || car==undefined? res.status(200).send({data:1, message:'id del car no existe'}):res.status(200).send(car);     
    }

    @Post()
    // @UsePipes(ValidationPipe)
    users(@Body() createcarDto:CreateCarDto){
        // console.log(body);
        // console.log(body);
        const ncar:CreateCarDto=createcarDto
        this.carsService.addCar(ncar)
        const listCars = this.carsService.getAll()
        return listCars;
    }


    // @Patch('/id=:id')
    // upadte(@Param() id:string,  @Body() body:any){
    //     console.log('Id car:', id);
    //     console.log(body);

    //     return {body, param: id};
    // }

    @Patch('/id=:id')
    updateCars( @Param('id') id:string, @Body() body:any){
        console.log('this a cards - update')
        console.log(id, body?.brand)
        console.log(id.valueOf())

        const result = this.carsService.update(id, body?.model,body?.brand);
        return result;  


    }

    @Delete(':id')
    deleteCar(@Param('id',ParseIntPipe) id:number){
        console.log(id);
        return id;
    }

}
