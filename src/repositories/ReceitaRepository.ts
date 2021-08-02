import { EntityRepository, Repository } from "typeorm";
import { Receita } from "../models/Receita";

@EntityRepository(Receita)
class ReceitaRepository extends Repository<Receita>{}

export {ReceitaRepository}