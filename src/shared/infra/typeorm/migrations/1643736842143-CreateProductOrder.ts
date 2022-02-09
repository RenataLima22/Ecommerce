import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
  } from "typeorm";
  
  export class CreateProductOrder1643234284640 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "pedido_produto",
          columns: [
            {
              name: "pedido_id",
              type: "int",
              isPrimary: false,
            },
            {
              name: "produto_id",
              type: "int",
              isPrimary: false,
            },
            {
              name: "quantidade",
              type: "int",
              isNullable: false,
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()",
            },
            {
              name: "updated_at",
              type: "timestamp",
              default: "now()",
            },
          ],
        })
      );
  
      // cria uma nova chave estrangeira
      await queryRunner.createForeignKey(
        "pedido_produto",
        new TableForeignKey({
          columnNames: ["pedido_id"],
          referencedColumnNames: ["id"], 
          referencedTableName: "pedidos", 
          onDelete: "CASCADE",
        })
      );
  
      await queryRunner.createForeignKey(
        "pedido_produto",
        new TableForeignKey({
          columnNames: ["produto_id"],
          referencedColumnNames: ["id"],
          referencedTableName: "produtos", 
        })
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("pedido_produto");
    }
  }