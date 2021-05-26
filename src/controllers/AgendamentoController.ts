import { getCustomRepository } from 'typeorm';
import { Request, Response } from "express";
import { AgendamentoRepository } from '../repositories/AgendamentoRepository';

class AgendamentoController {

    async create (request:Request, response:Response){
        
        const agendamentoRepository = getCustomRepository(AgendamentoRepository);
        const {data_agendamento,horario,paciente,sintomas,medico,observacoes,status,total} = request.body;

        const agendamento = agendamentoRepository.create({
            data_agendamento,horario,paciente,sintomas,medico,observacoes,status,total,
        })
        await agendamentoRepository.save(agendamento)

        return response.status(200).json(agendamento);
    }

    async read(request:Request, response:Response){
        const agendamentoRepository = getCustomRepository(AgendamentoRepository);

        const listaAgendamento = await agendamentoRepository.find({
            relations:["horario","paciente","medico"]
        });

        return response.status(200).json(listaAgendamento);
    }
    
    async readById(request:Request,response:Response){
        const agendamentoRepository = getCustomRepository(AgendamentoRepository);
        const {id} = request.params;

        const agendamento = await agendamentoRepository.findOne({
            relations:["horario","paciente","medico"]
        });
    
        return response.status(200).json(agendamento);
    }

    async update(request:Request,response:Response){
        const agendamentoRepository = getCustomRepository(AgendamentoRepository);
        const {id,data_agendamento,horario,paciente,sintomas,medico,observacoes,status,total} = request.body;

        await agendamentoRepository.update({id},{
            data_agendamento,horario,paciente,sintomas,medico,observacoes,status,total,
        })

        const agendamento = await agendamentoRepository.findOne(id,{
            relations:["horario","paciente","medico"]
        })
        
        return response.status(200).json(agendamento);

    }

    async delete (request:Request,response:Response){
        const agendamentoRepository = getCustomRepository(AgendamentoRepository);
        const {id} = request.params;
        
        await agendamentoRepository.delete(id);

        return response.status(200).json({"message":"Excluído com sucesso"});
    }
}

export {AgendamentoController}