import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Especialidade } from "./Especialidade";
import { Pessoa } from "./Pessoa";

@Entity("especialidade_medico")
class EspecialidadeMedico{

    @PrimaryColumn()
    readonly id : number;

    @ManyToOne(()=>Especialidade)
    @JoinColumn({name:"especialidade"})
    especialidade : Especialidade;

    @ManyToOne(()=>Pessoa, pessoa=> pessoa.especialidades)
    @JoinColumn({name:"medico"})
    medico : Pessoa;

}

export {EspecialidadeMedico}