import { Injectable } from '@nestjs/common';
import { Car } from './interfaces/cars.interface';
import {v4 as uuid} from 'uuid'

@Injectable()
export class CarsService {

    private cars:Car[] = [
        {
            id:uuid(),
            id2:1,
            brand:'Honda',
            model:'Corola'
        },{
            id:uuid(),
            id2:2,
            brand:'Honda',
            model:'Civic'
        },{
            id:uuid(),
            id2:3,
            brand:'Jeep',
            model:'Cherokee'
        }
    ]


    public getAll(){
        return this.cars;
    }

    public findById(id:string){
        const idNum = parseInt(id)

        console.log(this.cars)
        console.log(id)
        const car = this.cars.find((car)=>car.id2===idNum)
        console.log('-----------------')
        console.log(car)
        return car;
    }

    public addCar(car:any){
        const newCar: Car = {
            id:uuid(),
            id2:this.cars.length+1,
            brand:car.brand,
            model:car.model
        }

        this.cars.push(newCar)
        console.log(this.cars)
    }

    public update(id:string, model:string, brand:string){
        console.log(id);
        const cardId:number = parseInt(id);

        console.log(cardId)
         const card = this.cars.find((car)=>car.id2===cardId);
         console.log(card)
        console.log('services method in nestjs');
        console.log(model, brand)
        if(!card){
            return {message:`el car con el ${cardId} no existe`}
        }else{
            this.cars[id].model=model;
            this.cars[id].brand=brand;
            return card
        }   


    }
}
