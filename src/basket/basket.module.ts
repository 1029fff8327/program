import { Module } from '@nestjs/common';
import { BasketController } from './basket.controller';

@Module({
  controllers: [BasketController]
})
export class BasketModule {}
