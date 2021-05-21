import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("exame")
class Exame {

    @PrimaryColumn()
    readonly id : number;

    @Column()
    nome : string;
}

export {Exame}