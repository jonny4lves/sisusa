import { Router } from "express";
import { AgendamentoController } from "./controllers/AgendamentoController";
import { CidadeController } from "./controllers/CidadeController";
import { EnderecoPessoaController } from "./controllers/EnderecoPessoaController";
import { EspecialidadeController } from "./controllers/EspecialidadeController";
import { EspecialidadeMedicoController } from "./controllers/EspecialidadeMedicoController";
import { EstadoController } from "./controllers/EstadoController";
import { ExameController } from "./controllers/ExameController";
import { HorarioController } from "./controllers/HorarioController";
import { PessoaController } from "./controllers/PessoaController";
import { TipoEnderecoController } from "./controllers/TipoEnderecoController";

const router = Router();

const estadoController = new EstadoController();
const cidadeController = new CidadeController();
const especialidadeController = new EspecialidadeController();
const tipoEnderecoController = new TipoEnderecoController();
const horarioController = new HorarioController();
const exameController = new ExameController();
const pessoaController = new PessoaController();
const enderecoPessoaController = new EnderecoPessoaController();
const agendamentoController = new AgendamentoController();
const especialidadeMedicoController = new EspecialidadeMedicoController();

//ROTAS PARA ESTADO
router.post("/estado",estadoController.create);
router.get("/estado",estadoController.read);
router.get("/estado/:id",estadoController.readById);
router.put("/estado",estadoController.update);
router.delete("/estado/:id",estadoController.delete);

//ROTAS PARA CIDADE
router.post("/cidade",cidadeController.create);
router.get("/cidade",cidadeController.read);
router.get("/cidade/:id",cidadeController.readById);
router.put("/cidade",cidadeController.update);
router.delete("/cidade/:id",cidadeController.delete);

//ROTAS PARA ESPECIALIDADE
router.post("/especialidade",especialidadeController.create);
router.get("/especialidade",especialidadeController.read);
router.get("/especialidade/:id",especialidadeController.readById);
router.put("/especialidade",especialidadeController.update);
router.delete("/especialidade/:id",especialidadeController.delete);

//ROTAS PARA TIPOENDERECO
router.post("/tipoEndereco",tipoEnderecoController.create);
router.get("/tipoEndereco",tipoEnderecoController.read);
router.get("/tipoEndereco/:id",tipoEnderecoController.readById);
router.put("/tipoEndereco",tipoEnderecoController.update);
router.delete("/tipoEndereco/:id",tipoEnderecoController.delete);

//ROTAS PARA HORARIO
router.post("/horario",horarioController.create);
router.get("/horario",horarioController.read);
router.get("/horario/:id",horarioController.readById);
router.put("/horario",horarioController.update);
router.delete("/horario/:id",horarioController.delete);

//ROTAS PARA EXAME
router.post("/exame",exameController.create);
router.get("/exame",exameController.read);
router.get("/exame/:id",exameController.readById);
router.put("/exame",exameController.update);
router.delete("/exame/:id",exameController.delete);

//ROTAS PARA PESSOA
router.post("/pessoa",pessoaController.create);
router.get("/pessoa",pessoaController.read);
router.get("/pessoa/:id",pessoaController.readById);
router.put("/pessoa",pessoaController.update);
router.delete("/pessoa/:id",pessoaController.delete);

//ROTAS PARA ENDERECO
router.post("/enderecoPessoa",enderecoPessoaController.create);
router.get("/enderecoPessoa",enderecoPessoaController.read);
router.get("/enderecoPessoa/:id",enderecoPessoaController.readById);
router.put("/enderecoPessoa",enderecoPessoaController.update);
router.delete("/enderecoPessoa/:id",enderecoPessoaController.delete);

//ROTAS PARA AGENDAMENTO
router.post("/agendamento",agendamentoController.create);
router.get("/agendamento",agendamentoController.read);
router.get("/agendamento/:id",agendamentoController.readById);
router.put("/agendamento",agendamentoController.update);
router.delete("/agendamento/:id",agendamentoController.delete);

//ROTAS PARA ESPECIALIDADE MEDICO
router.post("/especialidadeMedico",especialidadeMedicoController.create);
router.get("/especialidadeMedico",especialidadeMedicoController.read);
router.get("/especialidadeMedico/:id",especialidadeMedicoController.readById);
router.put("/especialidadeMedico",especialidadeMedicoController.update);
router.delete("/especialidadeMedico/:id",especialidadeMedicoController.delete);

export {router}; 