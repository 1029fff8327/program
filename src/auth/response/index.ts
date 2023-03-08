import { ApiProperty } from "@nestjs/swagger/dist";
import { IsString } from "class-validator";

export class AuthUserResponse {
    @ApiProperty()
    @IsString()
    firstName: string
     
    @ApiProperty()
    @IsString()
    username: string
 
    @ApiProperty()
    @IsString()
    password: string
 
    @ApiProperty()
    @IsString()
    email: string

    @ApiProperty()
    @IsString()
    token: string
}