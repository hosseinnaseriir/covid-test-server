import { Module } from '@nestjs/common';
import { ExaminationsController } from './examinations.controller';
import { ExaminationsService } from './examinations.service';
import { Examination } from '../../models';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Examination])],
  controllers: [ExaminationsController],
  providers: [ExaminationsService]
})
export class ExaminationsModule { }
