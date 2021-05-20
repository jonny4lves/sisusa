import { getCustomRepository } from 'typeorm';
import { Request, Response } from "express";
import { EspecialidadeRepository } from '../repositories/EspecialidadeRepository';

class EspecialidadeController{

    async create(request:Request,response:Response){
        const especialidadeRepository = getCustomRepository(EspecialidadeRepository);
        const {nome} = request.body;

        const especialidade = especialidadeRepository.create({
            nome,
        })

        await especialidadeRepository.save(especialidade);

        return response.status(200).json(especialidade);
    }

    async read(request: Request, response:Response){
        const especialidadeRepository = getCustomRepository(EspecialidadeRepository);

        const especialidades = await especialidadeRepository.find();

        return response.status(200).json(especialidades);
    }

    async readById(request :Request, response: Response){
        const especialidadeRepository = getCustomRepository(EspecialidadeRepository);
        const {id} = request.params;

        const especialidade = await especialidadeRepository.findOne(id);

        return response.status(200).json(especialidade);
    }

    async update (request:Request,response:Response){
        const especialidadeRepository = getCustomRepository(EspecialidadeRepository);
        const {id,nome} = request.body;
        
        await especialidadeRepository.update({id},{nome});

        return response.status(200).json({"message":"Atualizado com sucesso"})
    }

    async delete(request:Request, response:Response){
        const especialidadeRepository = getCustomRepository(EspecialidadeRepository);
        const {id} = request.params;

        await especialidadeRepository.delete(id);

        return response.status(200).json({"message":"Excluido com sucesso"});
    }

}

export {EspecialidadeController};