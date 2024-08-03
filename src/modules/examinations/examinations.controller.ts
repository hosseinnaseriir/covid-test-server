import { Controller, Get, Param, Query, Version } from '@nestjs/common';
import { Public } from '../../decorators';
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

    @Public()
    @Get('stats')
    @Version('1')
    async getExaminationsStats() {
        return await this.examinationsService.getExaminationsStats();
    }

    @Public()
    @Get('/find/:locationId')
    @Version('1')
    async getExaminationsByLocationId(
        @Param('locationId') locationId: number,
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10
    ) {
        return await this.examinationsService.getExaminationsByLocationId(locationId, page, limit);
    }

    @Public()
    @Get('locations')
    @Version('1')
    getLocationIds() {
        return this.examinationsService.getLocationIds();
    }

}
