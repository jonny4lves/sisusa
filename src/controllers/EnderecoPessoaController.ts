import { getCustomRepository } from 'typeorm';
import { Request, Response } from "express";
import { EnderecoPessoaRepository } from '../repositories/EnderecoPessoaRepository';

class EnderecoPessoaController {

    async create(request: Request,response: Response){

        const enderecoPessoaRepository = getCustomRepository(EnderecoPessoaRepository);
        const {cep,rua,bairro,numero,complemento,cidade,pessoa,tipo} = request.body;

        const endereco = await enderecoPessoaRepository.create({
            cep, rua, bairro, numero, complemento, cidade, tipo, pessoa,
        });

        await enderecoPessoaRepository.save(endereco);

        return response.status(200).json(endereco);
        
    }

    async read (request: Request, response: Response){

        const enderecoPessoaRepository = getCustomRepository(EnderecoPessoaRepository);
        const listaEndereco = await enderecoPessoaRepository.find({relations:["cidade","cidade.estado","pessoa"]});

        return response.status(200).json(listaEndereco);

    }

    async readById(request: Request, response : Response){

        const enderecoPessoaRepository = getCustomRepository(EnderecoPessoaRepository);
        const {id} = request.params;
        
        const endereco = await enderecoPessoaRepository.findOne(id,{relations:["cidade","cidade.estado","pessoa"]});

        return response.status(200).json(endereco)

    }

    async update(request:Request, response:Response){
        const enderecoPessoaRepository = getCustomRepository(EnderecoPessoaRepository);
        const {id,cep,rua,bairro,numero,complemento,cidade,pessoa,tipo} = request.body;

        await enderecoPessoaRepository.update({id},{cep,rua,bairro,numero,complemento,cidade,pessoa,tipo});
        const endereco = enderecoPessoaRepository.findOne(id);

        return response.status(200).json(endereco);

    }

    async delete(request:Request,response:Response){
        const enderecoPessoaRepository = getCustomRepository(EnderecoPessoaRepository);
        const {id} = request.params;

        await enderecoPessoaRepository.delete(id);

        return response.status(200).json({"message":"Excluído com sucesso"})
    }

}

export {EnderecoPessoaController}