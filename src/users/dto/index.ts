import { ApiProperty } from "@nestjs/swagger/dist"
import { IsString } from "class-validator"

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    firstName: string

    @ApiProperty()
    @IsString()
    username: string

    @ApiProperty()
    @IsString() 
    email: string

    @ApiProperty()
    @IsString() 
    password: string
}