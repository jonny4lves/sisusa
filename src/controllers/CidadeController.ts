import { getCustomRepository } from 'typeorm';
import { request, Request, Response } from "express";
import { CidadeRepository } from '../repositories/CidadeRepository';

class CidadeController{

    async create(request:Request, response: Response){
        const {descricao, estado} = request.body;
        const cidadeRepository = getCustomRepository(CidadeRepository);

        const cidade = cidadeRepository.create({
            descricao,estado,
        })

        await cidadeRepository.save(cidade);

        return response.status(200).json(cidade);
    }

    async read (request: Request, response: Response){
        const cidadeRepository = getCustomRepository(CidadeRepository);

        const cidades = await cidadeRepository.find({relations:["estado"]});

        return response.status(200).json(cidades);
    }

    async readById(request: Request, response: Response){
        const cidadeRepository = getCustomRepository(CidadeRepository);
        const {id} = request.params;

        const cidade = await cidadeRepository.findOne(id,{relations:["estado"]});

        return response.status(200).json(cidade);
    }
}

export {CidadeController}