import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { Pessoarepository } from "../repositories/PessoaRepository";

class PessoaController {
    
    async create (request:Request,response: Response){
        const pessoaRepository = getCustomRepository(Pessoarepository);
        const {nome, telefone, email, data_nasc,flg_cliente, flg_medico, cpf_cnpj, crm} = request.body;
        
        const pessoa = pessoaRepository.create({
            nome, cpf_cnpj, data_nasc, email, flg_cliente, flg_medico, telefone, crm,
        })

        await pessoaRepository.save(pessoa);

        return response.status(200).json(pessoa);
    }

    async read (request: Request, response : Response){
        const pessoaRepository = getCustomRepository(Pessoarepository);

        const listaPesssoa = await pessoaRepository.find({relations:["enderecos","enderecos.cidade","enderecos.cidade.estado"]});

        return response.status(200).json(listaPesssoa);
    }

    async readById(request : Request, response: Response){
        const pessoaRepository = getCustomRepository(Pessoarepository);
        const {id} = request.params;

        const pessoa = await pessoaRepository.findOne(id,{relations:["enderecos"]});

        return response.status(200).json(pessoa);
    }

    async update (request : Request, response: Response){

        const pessoaRepository = getCustomRepository(Pessoarepository);
        const {id,nome, telefone, email, data_nasc,flg_cliente, flg_medico, cpf_cnpj, crm} = request.body;

        await pessoaRepository.update({id},{nome,telefone,email,data_nasc,flg_cliente,flg_medico,cpf_cnpj,crm});
        const pessoa = await pessoaRepository.findOne(id);

        return response.status(200).json(pessoa);

    }

    async delete (request : Request, response : Response){
        const pessoaRepository = getCustomRepository(Pessoarepository);
        const {id} = request.params;

        await pessoaRepository.delete(id);

        return response.status(200).json({"message" : "Excluido com sucesso"});
    }

}

export {PessoaController}