import { IsNumber, IsString, isString } from "class-validator";

export class CreateUserDto {
    @IsNumber()
    id

    @IsString()
    name


}
