import { Column, Entity, PrimaryColumn } from "typeorm";

   @Entity("estado")
   class Estado{
        @PrimaryColumn()
        readonly id: number;
        @Column()
        descricao : string;
        @Column()
        sigla : string;
    }

    export {Estado};