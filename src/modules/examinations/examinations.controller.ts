import { Controller, Get, Query, Version } from '@nestjs/common';
import { Public } from 'src/decorators';
import { ExaminationsService } from './examinations.service';

@Controller('examinations')
export class ExaminationsController {
    constructor(private readonly examinationsService: ExaminationsService) { }

    @Public()
    @Get()
    @Version('1')
    getExaminations(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10
    ) {
        return this.examinationsService.getExaminationsList(page, limit)
    }
}
