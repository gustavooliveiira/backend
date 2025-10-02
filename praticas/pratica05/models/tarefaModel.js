// Array para armazenar as tarefas em memória
const tarefas = [];

// Listar todas as tarefas
const listar = () => {
  return tarefas;
};

// Buscar tarefa por ID
const buscarPeloId = (tarefaId) => {
  const tarefa = tarefas.find(t => t.id === tarefaId);
  return tarefa || null;
};

// Criar nova tarefa
const criar = (tarefa) => {
  const novaTarefa = {
    ...tarefa,
    id: Math.random().toString(36).substr(2, 4)
  };
  tarefas.push(novaTarefa);
  return novaTarefa;
};

// Atualizar tarefa por ID
const atualizar = (tarefa) => {
  const index = tarefas.findIndex(t => t.id === tarefa.id);
  if (index !== -1) {
    tarefas[index] = { ...tarefas[index], ...tarefa };
    return tarefas[index];
  }
  return null;
};

// Remover tarefa por ID
const remover = (tarefaId) => {
  const index = tarefas.findIndex(t => t.id === tarefaId);
  if (index !== -1) {
    const tarefaRemovida = tarefas.splice(index, 1)[0];
    return tarefaRemovida;
  }
  return null;
};

module.exports = {
  listar,
  buscarPeloId,
  criar,
  atualizar,
  remover
};