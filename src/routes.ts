import { Router } from "express";
import { CidadeController } from "./controllers/CidadeController";
import { EspecialidadeController } from "./controllers/EspecialidadeController";
import { EstadoController } from "./controllers/EstadoController";
import { ExameController } from "./controllers/ExameController";
import { HorarioController } from "./controllers/HorarioController";
import { TipoEnderecoController } from "./controllers/TipoEnderecoController";

const router = Router();

const estadoController = new EstadoController();
const cidadeController = new CidadeController();
const especialidadeController = new EspecialidadeController();
const tipoEnderecoController = new TipoEnderecoController();
const horarioController = new HorarioController();
const exameController = new ExameController();

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


export {router};