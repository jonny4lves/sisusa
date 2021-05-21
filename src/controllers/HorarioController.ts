import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { HorarioRepository } from "../repositories/HorarioRepository";

class HorarioController{

        async create(request:Request,response:Response){
        const horarioRepository = getCustomRepository(HorarioRepository);
        const {hora,minuto} = request.body;

        const horario = horarioRepository.create({
            hora,minuto,
        })

        await horarioRepository.save(horario);

        return response.status(200).json(horario);
    }

    async read(request: Request, response:Response){
        const horarioRepository = getCustomRepository(HorarioRepository);

        const horarios = await horarioRepository.find();

        return response.status(200).json(horarios);
    }

    async readById(request :Request, response: Response){
        const horarioRepository = getCustomRepository(HorarioRepository);
        const {id} = request.params;

        const horario = await horarioRepository.findOne(id);

        return response.status(200).json(horario);
    }

    async update (request:Request,response:Response){
        const horarioRepository = getCustomRepository(HorarioRepository);
        const {id,hora,minuto} = request.body;
        
        await horarioRepository.update({id},{hora,minuto});

        return response.status(200).json({"message":"Atualizado com sucesso"})
    }

    async delete(request:Request, response:Response){
        const horarioRepository = getCustomRepository(HorarioRepository);
        const {id} = request.params;

        await horarioRepository.delete(id);

        return response.status(200).json({"message":"Excluido com sucesso"});
    }

}

export {HorarioController}