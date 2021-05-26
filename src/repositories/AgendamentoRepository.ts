import { EntityRepository, Repository } from 'typeorm';
import { Agendamento } from "../models/Agendamento";

@EntityRepository(Agendamento)
class AgendamentoRepository extends Repository<Agendamento>{}

export {AgendamentoRepository}