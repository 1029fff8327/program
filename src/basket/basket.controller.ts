import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BasketDto } from './dto/basket.dto';

@Controller('basket')
export class BasketController {

    @Post('add')
    async add(@Body() dto: BasketDto) {
        
    }

    @Delete('id')
    async delete(@Param('id') id: string) {

    }

    @Get('id') 
    async get(@Param('id') id: string) {

    }
}
