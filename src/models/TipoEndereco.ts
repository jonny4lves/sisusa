import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("tipo_endereco")
class TipoEndereco{

    @PrimaryColumn()
    readonly id : number;

    @Column()
    descricao : string;

}

export {TipoEndereco}