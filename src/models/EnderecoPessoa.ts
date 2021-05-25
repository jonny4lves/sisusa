import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Cidade } from "./Cidade";
import { Pessoa } from "./Pessoa";
import { TipoEndereco } from "./TipoEndereco";

@Entity("endereco_pessoa")
class EnderecoPessoa{

    @PrimaryColumn()
    readonly id: number;

    @Column()
    cep : string;

    @Column()
    rua : string;

    @Column()
    bairro : string;

    @Column()
    numero : string;

    @Column()
    complemento : string;

    @ManyToOne(()=>Cidade, cidade => cidade.descricao)
    @JoinColumn({name:"cidade"})
    cidade : Cidade;

    @ManyToOne(()=>Pessoa, pessoa => pessoa.enderecos)
    @JoinColumn({name:"pessoa"})
    pessoa : Pessoa;

    @ManyToOne(()=> TipoEndereco)
    @JoinColumn({name:"tipo"})
    tipo : TipoEndereco;

}

export {EnderecoPessoa}