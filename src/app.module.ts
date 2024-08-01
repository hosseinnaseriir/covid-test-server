import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Examination, User } from './models';
import { AuthModule } from './modules/authentication';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'postgres',
      host: process.env.NI_DB_HOST,
      port: +process.env.NI_DB_PORT,
      username: process.env.NI_DB_USERNAME,
      password: process.env.NI_DB_PASS,
      entities: [Examination, User],
      synchronize: true, // should disable in prod
    }),
    AuthModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {
}
