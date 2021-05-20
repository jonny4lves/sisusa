import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { FinalidadeRepository } from "../repositories/FinalidadeRepository";

class FinalidadeController{

    async create(request:Request,response:Response){
        const finalidadeRepository = getCustomRepository(FinalidadeRepository);
        const {descricao} = request.body;

        const finalidade = finalidadeRepository.create({
            descricao,
        })

        await finalidadeRepository.save(finalidade);

        return response.status(200).json(finalidade);
    }

    async read(request: Request, response:Response){
        const finalidadeRepository = getCustomRepository(FinalidadeRepository);

        const finalidades = await finalidadeRepository.find();

        return response.status(200).json(finalidades);
    }

    async readById(request :Request, response: Response){
        const finalidadeRepository = getCustomRepository(FinalidadeRepository);
        const {id} = request.params;

        const finalidade = await finalidadeRepository.findOne(id);

        return response.status(200).json(finalidade);
    }

    async update (request:Request,response:Response){
        const finalidadeRepository = getCustomRepository(FinalidadeRepository);
        const {id,descricao} = request.body;
        
        await finalidadeRepository.update({id},{descricao});

        return response.status(200).json({"message":"Atualizado com sucesso"})
    }

    async delete(request:Request, response:Response){
        const finalidadeRepository = getCustomRepository(FinalidadeRepository);
        const {id} = request.params;

        await finalidadeRepository.delete(id);

        return response.status(200).json({"message":"Excluido com sucesso"});
    }
}

export {FinalidadeController};