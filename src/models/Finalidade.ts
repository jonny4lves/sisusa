import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("finalidade")
class Finalidade{

    @PrimaryColumn()
    readonly id : number;

    @Column()
    descricao : string;
}

export {Finalidade}