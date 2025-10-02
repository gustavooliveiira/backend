const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

// GET /tarefas - Listar todas as tarefas
router.get('/', tarefaController.listar);

// GET /tarefas/:tarefaId - Buscar tarefa por ID
router.get('/:tarefaId', tarefaController.buscarPeloId);

// POST /tarefas - Criar nova tarefa
router.post('/', tarefaController.criar);

// PUT /tarefas/:tarefaId - Atualizar tarefa por ID
router.put('/:tarefaId', tarefaController.atualizar);

// DELETE /tarefas/:tarefaId - Remover tarefa por ID
router.delete('/:tarefaId', tarefaController.remover);

module.exports = router;