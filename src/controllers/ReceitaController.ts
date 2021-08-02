import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { ReceitaRepository } from "../repositories/ReceitaRepository";


class ReceitaController{

    async create(request:Request, response:Response){

        const receitaRepository = getCustomRepository(ReceitaRepository);
        const {paciente,medico,detalhamento,data_receita} = request.body;

        const receita =  receitaRepository.create({
            paciente, medico, detalhamento, data_receita
        });

        await receitaRepository.save(receita);

        return response.status(200).json(receita);

    }

    async read(request: Request, response:Response){
        const receitaRepository = getCustomRepository(ReceitaRepository);

        const listaReceita = await receitaRepository.find({relations:["paciente","medico"]});

        return response.status(200).json(listaReceita);
    }

    async readById(request :Request, response: Response){
        const receitaRepository = getCustomRepository(ReceitaRepository);

        const {id} = request.params;

        const receita = await receitaRepository.findOne(id,{relations:["paciente","medico"]});

        return response.status(200).json(receita);
    }

    async update(request : Request, response: Response){
        const receitaRepository = getCustomRepository(ReceitaRepository);

        await receitaRepository.update(request.body.id, request.body);
        const receita = await receitaRepository.findOne(request.body.id,{relations:["paciente","medico"]});

        return response.status(200).json(receita);

    }

    async delete(request: Request, response: Response){
        const receitaRepository = getCustomRepository(ReceitaRepository);
        const {id} = request.params;

        await receitaRepository.delete(id);

        return response.status(200).json({"message":"Excluido com sucesso"});

    }
}

export {ReceitaController}