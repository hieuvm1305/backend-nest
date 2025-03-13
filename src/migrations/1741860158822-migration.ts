import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1741860158822 implements MigrationInterface {
  name = 'Migration1741860158822';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "is_user" boolean NOT NULL DEFAULT true, "is_superuser" boolean NOT NULL DEFAULT false, "phone" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "logInAt" TIMESTAMP, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
