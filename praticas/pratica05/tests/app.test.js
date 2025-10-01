const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

const url = "/tarefas";

describe('Teste da rota/tarefas', () => {
    let id;

    test("GET / deve retornar 200", async () => {
        const response = await request.get(url);
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).not.toBeNull();
    });

    test("POST /tarefas deve criar uma nova tarefa", async () => {
        const response = await request.get(`${url}/${id}`)
            .post("/tarefas")
            .send({
                nome: "Estudar Node",
                concluida: false
            });
    
        expect(response.status).toBe(201);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body.id).toBeDefined();
    
        id = response.body['id'];
    
        expect(response.body.nome).toBe("Estudar Node");
        expect(response.body.concluida).toBe(false);
    });

    test("GET /id retornar 200", async () => {
        const response = await request.get(`${url}/${id}`);
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body['id']).toBe(id); 
        expect(response.body ['nome']).toMatch("Estudar Node");
        expect(response.body ['concluida']).toBeFalsy();
    });
});

