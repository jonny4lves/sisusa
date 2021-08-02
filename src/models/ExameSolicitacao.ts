import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Exame } from "./Exame";
import { SolicitacaoExames } from "./SolicitacaoExames";

@Entity("exames_solicitacao")
class ExameSolicitacao{

    @PrimaryColumn()
    readonly id : number;

    @ManyToOne(()=>SolicitacaoExames, solicitacao => solicitacao.exames)
    @JoinColumn({name : "solicitacao"})
    solicitacao : SolicitacaoExames;

    @ManyToOne(()=>Exame)
    @JoinColumn({name : "exame"})
    exame : Exame;

}

export {ExameSolicitacao}