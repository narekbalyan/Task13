import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar" })
    name: string;

    @Column({ type: "varchar" })
    unitofmeasurement: string;

    @Column({ type: "int" })
    price: number;

}