import { ApiProperty } from "@nestjs/swagger/dist"
import { IsString } from "class-validator"

export class UserLoginDto {
   @ApiProperty()
   @IsString() 
  email: string

  @ApiProperty()
  @IsString()
  password: string
}