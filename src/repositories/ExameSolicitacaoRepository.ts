import { EntityRepository, Repository } from 'typeorm';
import { ExameSolicitacao } from '../models/ExameSolicitacao';

@EntityRepository(ExameSolicitacao)
class ExameSolicitacaoRepository extends Repository<ExameSolicitacao>{}

export {ExameSolicitacaoRepository}