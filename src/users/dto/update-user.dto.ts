// import { PartialType } from '@nestjs/mapped-types';
// import { CreateUserDto } from './create-user.dto';

import { IsNotEmpty, IsString } from "class-validator";

// export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class UpdateUserDto{
    @IsString()
    @IsNotEmpty()
    name
}
