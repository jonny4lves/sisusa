import { EntityRepository, Repository } from 'typeorm';
import { Exame } from '../models/Exame';

@EntityRepository(Exame)
class ExameRepository extends Repository<Exame>{}

export {ExameRepository}
