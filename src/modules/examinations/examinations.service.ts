import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Examination } from '../../models';
import { Repository } from 'typeorm';

@Injectable()
export class ExaminationsService {

    constructor(
        @InjectRepository(Examination)
        private examinationRepository: Repository<Examination>,
    ) { }


    async getExaminationsList(page: number, limit: number) {
        if (page < 1 || limit < 1) {
            throw new HttpException('Page and limit must be positive integers', HttpStatus.BAD_REQUEST);
        }
        const [result, total] = await this.examinationRepository.findAndCount({
            take: limit,
            skip: (page - 1) * limit,
        });

        if (total === 0) {
            throw new HttpException('The list is empty!', HttpStatus.NO_CONTENT);
        }

        return {
            data: result,
            total,
            page,
            limit,
        };
    }

}
