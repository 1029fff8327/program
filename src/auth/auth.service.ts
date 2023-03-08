import { BadRequestException, Injectable } from '@nestjs/common';
import { AppError } from 'src/common/constants/errors';
import { TokenService } from 'src/token/token.service';
import { CreateUserDto } from 'src/users/dto';
import { UsersService } from 'src/users/users.service';
import { UserLoginDto } from './dto';
import * as bcrypt from "bcrypt";
import { AuthUserResponse } from './response';

@Injectable()
export class AuthService {
    constructor(
      private readonly userService: UsersService,
      private readonly tokenService: TokenService
      ) {}

    async registerUsers(dto: CreateUserDto): Promise<CreateUserDto> {
      const existUser = await this.userService.findUserByEmail(dto.email)
      if (existUser) throw new BadRequestException(AppError.USER_EXIST)
      return this.userService.createUser(dto)
    }
    
    async loginUser(dto: UserLoginDto): Promise<AuthUserResponse> {
      const existUser = await this.userService.findUserByEmail(dto.email)
      if (!existUser) throw new BadRequestException(AppError.USER_NOT_EXIST)
      const validatePassword = await bcrypt.compare(dto.password, existUser.password)
      if (!validatePassword) throw new BadRequestException(AppError.WRONG_DATA)
      const token = await this.tokenService.generateJwtToken(dto.email)
      const  user = await this.userService.publicUser(dto.email)
      return {...existUser, token}
    }
}
