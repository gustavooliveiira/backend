const tarefas = [];

const listarTarefa = (req, res) => {
    res.json(tarefas);
};

const criarTarefa = (req, res) => {
    const novaTarefa = { ...req.body, id : tarefas.length + 1
    };
    tarefas.push(novaTarefa);

    res.status(201).json(novaTarefa);
};

const listarterfasId = (req, res) => {
    const { id } = req.params;
    const tarefaEncontrada = tarefas.find(item => item.id === parseInt(id));
    if (tarefaEncontrada) 
        return res.json(tarefaEncontrada);
    res.status(404).json({msg: "Tarefa não encontrada"})
}

module.exports = {listarTarefa, criarTarefa, listarterfasId};