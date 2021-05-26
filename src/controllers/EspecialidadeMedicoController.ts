import { getCustomRepository } from 'typeorm';
import { Request, Response } from "express";
import { EspecialidadeMedicoRepository } from '../repositories/EspecialidadeMedicoRepository';


class EspecialidadeMedicoController {

    async create(request:Request,response:Response){
        const especialidadeMedicoRepostory = getCustomRepository(EspecialidadeMedicoRepository);
        const {especialidade, medico} = request.body;

        const especialidaMedico = especialidadeMedicoRepostory.create({
            especialidade,medico,
        })

        await especialidadeMedicoRepostory.save(especialidaMedico);

        return response.status(200).json(especialidaMedico);
    }

    async read (request:Request, response:Response){
        const especialidadeMedicoRepostory = getCustomRepository(EspecialidadeMedicoRepository);
        
        const listaEspecialidades = await especialidadeMedicoRepostory.find({relations:["especialidade","medico"]});

        return response.status(200).json(listaEspecialidades);
    }

    async readById(request:Request, response:Response){
        const especialidadeMedicoRepostory = getCustomRepository(EspecialidadeMedicoRepository);
        const {id} = request.params;

        const especialidadeMedico = await especialidadeMedicoRepostory.findOne(id,{
            relations:["especialidade","medico"]
        });

        return response.status(200).json(especialidadeMedico);

    }

    async update(request:Request,response:Response){
        const especialidadeMedicoRepostory = getCustomRepository(EspecialidadeMedicoRepository);
        
        await especialidadeMedicoRepostory.update(request.body.id,request.body);
        const especialidadeMedico = await especialidadeMedicoRepostory.findOne(request.body.id,{
            relations:["especialidade","medico"]
        });    

        return response.status(200).json(especialidadeMedico);
    }

    async delete(request:Request, response:Response){
        const especialidadeMedicoRepostory = getCustomRepository(EspecialidadeMedicoRepository);
        const {id} = request.params;

        await especialidadeMedicoRepostory.delete(id);

        return response.status(200).json({"message":"Excluído com sucesso"});

    }
}

export {EspecialidadeMedicoController}