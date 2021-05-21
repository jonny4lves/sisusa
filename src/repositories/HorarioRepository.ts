import { EntityRepository, Repository } from 'typeorm';
import { Horario } from '../models/Horario';

@EntityRepository(Horario)
class HorarioRepository extends Repository<Horario>{}

export {HorarioRepository}