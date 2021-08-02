import { EntityRepository, Repository } from "typeorm";
import { SolicitacaoExames } from "../models/SolicitacaoExames";

@EntityRepository(SolicitacaoExames)
class SolicitacaoExamesRepository extends Repository<SolicitacaoExames>{}

export {SolicitacaoExamesRepository}