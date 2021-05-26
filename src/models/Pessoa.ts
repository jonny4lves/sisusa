import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { EnderecoPessoa } from "./EnderecoPessoa";
import { EspecialidadeMedico } from "./EspecialidadeMedico";

@Entity("pessoa")
class Pessoa{

    @PrimaryColumn()
    readonly id : number;

    @Column()
    nome : string;

    @Column()
    telefone : string;

    @Column()
    email : string;

    @Column()
    data_nasc : Date;

    @Column()
    flg_cliente : number;

    @Column()
    flg_medico : number;

    @Column()
    cpf_cnpj : string;

    @Column()
    crm : string;

    @OneToMany(() => EnderecoPessoa, endereco => endereco.pessoa)
    enderecos : EnderecoPessoa[];

    @OneToMany(()=> EspecialidadeMedico, especialidades => especialidades.medico)
    especialidades : EspecialidadeMedico

}

export {Pessoa}