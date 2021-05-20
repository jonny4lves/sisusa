import { EntityRepository, Repository } from 'typeorm';
import { Finalidade } from '../models/Finalidade';

@EntityRepository(Finalidade)
class FinalidadeRepository extends Repository<Finalidade>{}

export{FinalidadeRepository}