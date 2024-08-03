import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Examination } from '../../models';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

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

    async getExaminationsByLocationId(locationId: number, page: number, limit: number) {
        if (page < 1 || limit < 1) {
            throw new HttpException('Page and limit must be positive integers', HttpStatus.BAD_REQUEST);
        }

        const [result, total] = await this.examinationRepository.findAndCount({
            where: { locationId },
            take: limit,
            skip: (page - 1) * limit,
        });

        if (total === 0) {
            throw new HttpException('No examinations found for the given location ID!', HttpStatus.NO_CONTENT);
        }

        return {
            data: result,
            total,
            page,
            limit,
        };
    }

    async getLocationIds(): Promise<number[]> {
        const locations = await this.examinationRepository
            .createQueryBuilder('examination')
            .select('DISTINCT examination.locationId')
            .orderBy('examination.locationId', 'ASC')
            .getRawMany();

        return locations.map(location => location.locationId);
    }

    async getExaminationsStats() {
        const rawData = await this.examinationRepository
            .createQueryBuilder('examination')
            .select('examination.locationId')
            .addSelect('SUM(CASE WHEN examination.result = \'pending\' THEN 1 ELSE 0 END)', 'pending')
            .addSelect('SUM(CASE WHEN examination.result = \'negative\' THEN 1 ELSE 0 END)', 'negative')
            .addSelect('SUM(CASE WHEN examination.result = \'positive\' THEN 1 ELSE 0 END)', 'positive')
            .groupBy('examination.locationId')
            .getRawMany();

        return rawData.map(data => ({
            id: uuidv4(),
            locationId: Number(data.examination_locationId),
            pending: Number(data.pending),
            negative: Number(data.negative),
            positive: Number(data.positive),
        }));
    }
}
