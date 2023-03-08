import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { BasketModule } from './basket/basket.module';
import { BasketController } from './basket/basket.controller';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config/dist';
import configurations from './configurations';
import { User } from './users/users.model/users.model';
import { TokenModule } from './token/token.module';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
    load: [configurations]
  }) ,
  SequelizeModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      dialect: "postgres",
      host: configService.get('db_host'),
      port: configService.get('db_port'),
      username: configService.get('db_user'),
      password: configService.get('db_password'),
      database: configService.get('db_name'),
      synchronize: true,
      autoLoadModels: true,
      models: [User],
    })
  }) ,
   ProductModule, UsersModule, BasketModule, AuthModule, TokenModule],
  controllers: [AppController, BasketController],
  providers: [AppService],
})
export class AppModule {}
