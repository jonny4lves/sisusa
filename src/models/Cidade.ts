import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Estado } from "./Estado";

@Entity("cidade")
class Cidade{
    @PrimaryColumn()
    readonly id : number;
    @Column()
    descricao : string;
    @ManyToOne(()=>Estado)
    @JoinColumn({name:"estadoId"})
    estado : Estado;
}

export {Cidade}