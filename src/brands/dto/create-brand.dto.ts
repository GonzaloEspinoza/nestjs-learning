
import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateBrandDto {
    @IsString()
    @MinLength(1)
    name:string

    @IsNumber()
    placa:number

}
