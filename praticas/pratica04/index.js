import express from 'express';

const tarefas = [  
    { id: 1, nome: "Estudar middleware", concluida: false },  
    { id: 2, nome: "Praticar Express", concluida: true }  
  ];


const app = express();


const router = express.Router();


app.use(express.json());


app.use((req, res, next) => {
    const hora = new Date().toLocaleString('pt-BR');
    const metodo = req.method;
    const url = req.url;
  
    console.log(`[${hora}] ${metodo} ${url}`);
  
    next();
});


router.get("/tarefas/", (req, res) => {
  res.status(200).json(tarefas);
});


router.post("/tarefas/", (req, res) => {
  console.log(req.body);
  tarefas.push(req.body);
  res.status(201).send("inserido com sucesso");
});


router.get("/tarefas/:id", (req, res) => {
    const { id } = req.params;
    for(const tarefa of Object.values(tarefas)) if (id == tarefa["id"]) return res.send("Achei");
    return res.status(404).send('tarefa nao encontrada');
});


router.put("/tarefas/:id", (req,res) => {
    const { id } = req.params;
    for(const tarefa of Object.values(tarefas)) if (id == tarefa["id"])  {
      tarefa.nome = req.body.nome
      tarefa.concluida = req.body.concluida
      return res.send('Atualizado')
    //b
    }return res.status(404).send('tarefa nao encontrada');
})


router.delete("/tarefas/:id", (req,res) => {
  const { id } = req.params;
  for(const tarefa of Object.values(tarefas)) if (id == tarefa["id"])  {
    tarefas.splice(tarefas.indexOf(tarefa),1)
    console.log(tarefas)
    return res.status(204).send('Removido')
 
  }  return res.status(404).send('tarefa nao encontrada');
})

app.use("/",router)


app.listen(3000, () => {
    console.log("Up!");
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("Deu ruim!");
  });

export default app;