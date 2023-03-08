import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post('create-user')
    createUsers (@Body() dto: |CreateUserDto) {
        console.log(dto);
        return this.userService.createUser(dto)
    }

    @Post('register')
    async register(@Body() dto: CreateUserDto) {

    }
     
    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: CreateUserDto) {

    }
 
    @Post('username')
    async username(@Body() dto: CreateUserDto) {

    }
}
