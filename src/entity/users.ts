import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({ type: "varchar" })
    FirstName: string;

    @Column({ type: "varchar" })
    LirstName: string;

    @Column({ type: "varchar" })
    address: string;

    @Column({ type: "varchar" })
    email: string;

}