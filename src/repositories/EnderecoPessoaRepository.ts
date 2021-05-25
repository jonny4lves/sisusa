import { EntityRepository, Repository } from 'typeorm';
import { EnderecoPessoa } from '../models/EnderecoPessoa';
 
@EntityRepository(EnderecoPessoa)
 class EnderecoPessoaRepository extends Repository<EnderecoPessoa>{}

 export {EnderecoPessoaRepository}