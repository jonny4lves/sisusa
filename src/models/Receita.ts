import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Pessoa } from "./Pessoa";

@Entity("receita")
class Receita {

    @PrimaryColumn()
    readonly id:number;

    @ManyToOne(()=>Pessoa)
    @JoinColumn({name:"paciente"})
    paciente : Pessoa;

    @ManyToOne(()=>Pessoa)
    @JoinColumn({name:"medico"})
    medico:Pessoa;

    @Column()
    detalhamento: string;

    @Column()
    data_receita:Date;

}

export {Receita}