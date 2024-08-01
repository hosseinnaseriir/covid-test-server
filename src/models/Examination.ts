import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('examination')
export class Examination {
    @PrimaryColumn()
    id: number;

    @Column('timestamp')
    date: Date;

    @Column()
    locationId: number;

    @Column()
    result: string;
}
