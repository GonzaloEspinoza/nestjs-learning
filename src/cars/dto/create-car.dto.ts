import {IsNumber, IsString} from 'class-validator';

export class CreateCarDto {
    @IsNumber()
    id2:string

    @IsString()
    readonly brand:string;

    @IsString()
    readonly model:string;
}