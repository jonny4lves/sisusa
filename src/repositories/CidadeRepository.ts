import { EntityRepository, Repository } from "typeorm";
import { Cidade } from "../models/Cidade";

@EntityRepository(Cidade)
class CidadeRepository extends Repository<Cidade>{}

export {CidadeRepository}