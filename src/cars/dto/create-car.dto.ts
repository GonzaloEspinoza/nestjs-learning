import {IsNumber, IsString} from 'class-validator';

export class CreateCarDto {
    @IsNumber()   // this a decorator
    id2:string

    @IsString()  // this a decorator
    readonly brand:string;

    @IsString()  // this a decorator
    readonly model:string;
}