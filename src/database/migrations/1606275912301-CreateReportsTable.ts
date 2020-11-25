import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateReportsTable1606275912301 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
      await queryRunner.createDatabase('reports_postgres')
      await queryRunner.createTable(
        new Table({
          name: 'reports',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy:'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'email',
              type: 'varchar',
            },
            {
              name: 'description',
              type: 'varchar',
            },
            {
              name: 'reason',
              type: 'varchar',
            },
            {
              name: 'userReported',
              type: 'varchar'
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('reports')
      await queryRunner.dropDatabase('reports_postgres')
    }

}


