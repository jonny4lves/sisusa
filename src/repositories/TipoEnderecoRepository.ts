import { EntityRepository, Repository } from 'typeorm';
import { TipoEndereco } from '../models/TipoEndereco';

@EntityRepository(TipoEndereco)
class TipoEnderecoRepository extends Repository<TipoEndereco>{}

export {TipoEnderecoRepository};