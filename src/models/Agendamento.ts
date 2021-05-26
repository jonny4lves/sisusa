import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Horario } from "./Horario";
import { Pessoa } from "./Pessoa";

@Entity("agendamento")
class Agendamento{

    @PrimaryColumn()
    readonly id : number;

    @Column()
    data_agendamento : Date;

    @ManyToOne(()=>Horario)
    @JoinColumn({name:"horario"})
    horario: Horario;

    @ManyToOne(()=>Pessoa)
    @JoinColumn({name:"paciente"})
    paciente : Pessoa;

    @Column()
    sintomas : string;

    @Column()
    observacoes : string;

    @Column()
    status : string

    @ManyToOne(()=>Pessoa)
    @JoinColumn({name:"medico"})
    medico : Pessoa;

    @Column()
    total : number;

}

export {Agendamento}