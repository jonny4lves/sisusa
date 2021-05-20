import { EntityRepository, Repository } from "typeorm";
import { Especialidade } from "../models/Especialidade";

@EntityRepository(Especialidade)
class EspecialidadeRepository extends Repository<Especialidade>{}

export {EspecialidadeRepository}