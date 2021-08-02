import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { ExameSolicitacao } from "./ExameSolicitacao";
import { Pessoa } from "./Pessoa";

@Entity("solicitacao_exames")
class SolicitacaoExames {

    @PrimaryColumn()
    readonly id : number;

    @ManyToOne(()=>Pessoa)
    @JoinColumn({name:"paciente"})
    paciente : Pessoa;

    @ManyToOne(()=>Pessoa)
    @JoinColumn({name:"medico"})
    medico : Pessoa;

    @Column()
    data_solicitacao : Date;

    @OneToMany(()=>ExameSolicitacao, exames=> exames.solicitacao)
    exames : ExameSolicitacao[];

}

export {SolicitacaoExames}