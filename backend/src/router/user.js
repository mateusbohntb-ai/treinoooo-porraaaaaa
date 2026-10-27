import express from "express"

import ControllerUser from "../controller/user.js"

const router = express.Router()

// Mostra todos os usuarios cadastrados no banco de dados 
router.get("/buscar", authMiddleware,ControllerUser.Buscar)
// Busca a conta do usuario 
router.get("/detalhe",authMiddleware, ControllerUser.Detalhe)
// Cadastra um usuario dentro do sistema 
router.post("/criar", ControllerUser.Criar)
// Altera a conta do usuario 
router.put("/alterar",authMiddleware, ControllerUser.Alterar)
// Deletar o usuario 
router.delete("/deletar",authMiddleware, ControllerUser.Deletar)
// Login do o usuario 
router.post("/login", ControllerUser.Login)



export default router