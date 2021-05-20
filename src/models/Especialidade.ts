import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("especialidade")
class Especialidade{

    @PrimaryColumn()
    readonly id:number;

    @Column()
    nome:string;

}

export {Especialidade}