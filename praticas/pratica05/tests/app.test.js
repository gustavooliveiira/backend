const request = require('supertest');
const app = require('../app');

let tarefaId;

describe('API de Tarefas', () => {
  
  // Teste GET /tarefas
  test('GET /tarefas deve retornar status 200 e conteúdo JSON', async () => {
    const response = await request(app)
      .get('/tarefas')
      .expect(200)
      .expect('Content-Type', /json/);
  });
  
  // Teste POST /tarefas
  test('POST /tarefas deve criar uma tarefa e retornar status 201', async () => {
    const novaTarefa = {
      nome: 'Estudar Node',
      concluida: false
    };
    
    const response = await request(app)
      .post('/tarefas')
      .send(novaTarefa)
      .expect(201)
      .expect('Content-Type', /json/);
      
    tarefaId = response.body.id;
    expect(tarefaId).toBeDefined();
  });
  
  // Teste GET /tarefas/:id
  test('GET /tarefas/:id deve retornar status 200 e conteúdo JSON', async () => {
    const response = await request(app)
      .get(`/tarefas/${tarefaId}`)
      .expect(200)
      .expect('Content-Type', /json/);
  });
  
  // Teste GET /tarefas/1 (não existe)
  test('GET /tarefas/1 deve retornar status 404 e conteúdo JSON', async () => {
    const response = await request(app)
      .get('/tarefas/1')
      .expect(404)
      .expect('Content-Type', /json/);
      
    expect(response.body.msg).toBe('Tarefa não encontrada');
  });
  
  // Teste PUT /tarefas/:id
  test('PUT /tarefas/:id deve atualizar uma tarefa e retornar status 200', async () => {
    const tarefaAtualizada = {
      nome: 'Estudar Node e Express',
      concluida: true
    };
    
    const response = await request(app)
      .put(`/tarefas/${tarefaId}`)
      .send(tarefaAtualizada)
      .expect(200)
      .expect('Content-Type', /json/);
      
    expect(response.body.id).toBe(tarefaId);
  });
  
  // Teste PUT /tarefas/1 (não existe)
  test('PUT /tarefas/1 deve retornar status 404 e conteúdo JSON', async () => {
    const tarefaAtualizada = {
      nome: 'Estudar Node e Express',
      concluida: true
    };
    
    const response = await request(app)
      .put('/tarefas/1')
      .send(tarefaAtualizada)
      .expect(404)
      .expect('Content-Type', /json/);
      
    expect(response.body.msg).toBe('Tarefa não encontrada');
  });
  
  // Teste DELETE /tarefas/:id
  test('DELETE /tarefas/:id deve remover uma tarefa e retornar status 204', async () => {
    const response = await request(app)
      .delete(`/tarefas/${tarefaId}`)
      .expect(204);
  });
  
  // Teste DELETE /tarefas/1 (não existe)
  test('DELETE /tarefas/1 deve retornar status 404 e conteúdo JSON', async () => {
    const response = await request(app)
      .delete('/tarefas/1')
      .expect(404)
      .expect('Content-Type', /json/);
      
    expect(response.body.msg).toBe('Tarefa não encontrada');
  });
  
});