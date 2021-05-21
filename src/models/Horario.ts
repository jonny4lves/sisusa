import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("horario")
class Horario {

    @PrimaryColumn()
    readonly id : number;

    @Column()
    hora : number;

    @Column()
    minuto : number;

}

export {Horario}