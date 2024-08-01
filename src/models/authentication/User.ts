import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
    })
    createdAt: Date;

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP"
    })
    updatedAt: Date;

}