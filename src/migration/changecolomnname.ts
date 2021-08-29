import {MigrationInterface, QueryRunner} from "typeorm";

export class ColomnNameChanging implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "price" RENAME TO "cost"`);
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "cost" RENAME TO "price"`);
    }
}