import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Examination } from '@Entities';

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
      entities: [Examination],
      synchronize: true, // should disable in prod
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {
}
