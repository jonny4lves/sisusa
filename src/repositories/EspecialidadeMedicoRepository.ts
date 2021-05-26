import { EntityRepository, Repository } from 'typeorm';
import { EspecialidadeMedico } from '../models/EspecialidadeMedico';
 
@EntityRepository(EspecialidadeMedico)
 class EspecialidadeMedicoRepository extends Repository<EspecialidadeMedico>{}

 export {EspecialidadeMedicoRepository}