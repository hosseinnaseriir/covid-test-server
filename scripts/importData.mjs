import { Examination } from '../dist/models/Examination.js';
import fs from 'fs';
import { DataSource } from 'typeorm';

import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const AppDataSource = new DataSource({
    type: 'postgres',
    database: 'postgres',
    host: process.env.NI_DB_HOST,
    port: +process.env.NI_DB_PORT,
    username: process.env.NI_DB_USERNAME,
    password: process.env.NI_DB_PASS,
    entities: [Examination],
    synchronize: true, // Synchronize schema with the database, use with caution in production
});


async function importData() {
    const data = JSON.parse(fs.readFileSync('scripts/data/db.json', 'utf8'));

    await AppDataSource.initialize();

    const resultRepository = AppDataSource.getRepository(Examination);

    try {
        for (const item of data) {
            await resultRepository.save({
                id: item.id,
                date: new Date(item.date),
                locationId: item.locationId,
                result: item.result
            });
        }
        console.log('Data import successful!');
    } catch (error) {
        console.error('Error importing data:', error);
    } finally {
        await AppDataSource.destroy();
    }
}

importData();