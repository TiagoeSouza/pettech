import { MigrationInterface, QueryRunner } from "typeorm";

export class UserUniqueUserName1726370344844 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "user"
             ADD CONSTRAINT username_unique UNIQUE(username);
            `,
          )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "user"
            REMOVE CONSTRAINT username_unique;
           `,
          )
    }

}
