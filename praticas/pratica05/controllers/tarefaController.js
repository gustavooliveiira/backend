const tarefaModel = require('../models/tarefaModel');

// Listar todas as tarefas
const listar = (req, res) => {
  const resultado = tarefaModel.listar();
  res.json(resultado);
};

// Buscar tarefa por ID
const buscarPeloId = (req, res) => {
  const tarefaId = req.params.tarefaId;
  const resultado = tarefaModel.buscarPeloId(tarefaId);
  
  if (resultado !== null) {
    res.json(resultado);
  } else {
    res.status(404).json({ msg: 'Tarefa não encontrada' });
  }
};

// Criar nova tarefa
const criar = (req, res) => {
  const tarefa = req.body;
  const resultado = tarefaModel.criar(tarefa);
  res.status(201).json(resultado);
};

// Atualizar tarefa por ID
const atualizar = (req, res) => {
  const tarefaId = req.params.tarefaId;
  const tarefa = { ...req.body, id: tarefaId };
  const resultado = tarefaModel.atualizar(tarefa);
  
  if (resultado !== null) {
    res.json(resultado);
  } else {
    res.status(404).json({ msg: 'Tarefa não encontrada' });
  }
};

// Remover tarefa por ID
const remover = (req, res) => {
  const tarefaId = req.params.tarefaId;
  const resultado = tarefaModel.remover(tarefaId);
  
  if (resultado !== null) {
    res.status(204).end();
  } else {
    res.status(404).json({ msg: 'Tarefa não encontrada' });
  }
};

module.exports = {
  listar,
  buscarPeloId,
  criar,
  atualizar,
  remover
};