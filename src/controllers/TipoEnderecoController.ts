import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { TipoEnderecoRepository } from "../repositories/TipoEnderecoRepository";

class TipoEnderecoController{
    async create(request:Request,response:Response){
        const tipoEnderecoRepository = getCustomRepository(TipoEnderecoRepository);
        const {descricao} = request.body;

        const tipoEndereco = tipoEnderecoRepository.create({
            descricao,
        })

        await tipoEnderecoRepository.save(tipoEndereco);

        return response.status(200).json(tipoEndereco);
    }

    async read(request: Request, response:Response){
        const tipoEnderecoRepository = getCustomRepository(TipoEnderecoRepository);

        const tiposEndereco = await tipoEnderecoRepository.find();

        return response.status(200).json(tiposEndereco);
    }

    async readById(request :Request, response: Response){
        const tipoEnderecoRepository = getCustomRepository(TipoEnderecoRepository);
        const {id} = request.params;

        const tipoEndereco = await tipoEnderecoRepository.findOne(id);

        return response.status(200).json(tipoEndereco);
    }

    async update (request:Request,response:Response){
        const tipoEnderecoRepository = getCustomRepository(TipoEnderecoRepository);
        const {id,descricao} = request.body;
        
        await tipoEnderecoRepository.update({id},{descricao});

        return response.status(200).json({"message":"Atualizado com sucesso"})
    }

    async delete(request:Request, response:Response){
        const tipoEnderecoRepository = getCustomRepository(TipoEnderecoRepository);
        const {id} = request.params;

        await tipoEnderecoRepository.delete(id);

        return response.status(200).json({"message":"Excluido com sucesso"});
    }
}

export {TipoEnderecoController}