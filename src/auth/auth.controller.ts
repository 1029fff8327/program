import { Controller, Body, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponse } from '@nestjs/swagger/dist';
import { JwtAuthGuard } from 'src/guards/JwtAuthGuard';
import { CreateUserDto } from 'src/users/dto';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto';
import { AuthUserResponse } from './response';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @ApiTags('API')
  @ApiResponse({status: 201, type: CreateUserDto })
  @Post('register')
  register (@Body() dto: CreateUserDto): Promise<CreateUserDto> {
     return this.authService.registerUsers(dto);
  }

  @ApiTags('API')
  @ApiResponse({status: 200, })
  @Post('login')
  login (@Body() dto: UserLoginDto): Promise<AuthUserResponse> {
    return this.authService.loginUser(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('test')
  test () {
    return true
  }
}
