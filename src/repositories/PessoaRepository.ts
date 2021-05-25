import { EntityRepository, Repository } from 'typeorm';
import { Pessoa } from '../models/Pessoa';

@EntityRepository(Pessoa)
class Pessoarepository extends Repository<Pessoa>{}

export {Pessoarepository}