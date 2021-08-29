import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {User} from "./users";
import {Product} from "./products";

@Entity()
export class Order {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({ type: "int" })
    price: number;

    @Column({ type: "varchar" })
    paymentMethod: string;

    @Column({ type: "varchar" })
    status: string;

    @Column({ type: "int" })
    quantity: number;

    @Column({ type: "int", nullable: true })
    parent_id: number;

    @ManyToOne(type => Product)
    @JoinColumn({
        name: "product_id",
        referencedColumnName: "id"
    })
    product_id: Product;

    @ManyToOne(type => User)
    @JoinColumn({
        name: "user_id",
        referencedColumnName: "id"
    })
    user_id: Product;

}