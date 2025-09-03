const { calcularMediaAluno } = require('../src/calcularMediaAluno');

test("calcula Media Aluno", function(){
    expect(calcularMediaAluno).toBeDefined()
});

test("A1 ou A2 estão indefinidos! ", function(){
    expect(calcularMediaAluno).toBeDefined()
    expect(() => calcularMediaAluno()).toThrow("Notas a1 ou a2 não informadas");
    expect(() => calcularMediaAluno(undefined,1,2)).toThrow("Notas a1 ou a2 não informadas");
    expect(() => calcularMediaAluno(1,undefined,2)).toThrow("Notas a1 ou a2 não informadas");
});

test("A1 ou A2 estão negativos ", function(){
    expect(() => calcularMediaAluno(-1,2,0)).toThrow("Nata A1 e A2 estão negativas");
    expect(() => calcularMediaAluno(1,-2,0)).toThrow("Nata A1 e A2 estão negativas");
    expect(() => calcularMediaAluno(-1,-2,0)).toThrow("Nata A1 e A2 estão negativas");
});

test("a3 foi informado? " ,function(){
    expect(calcularMediaAluno(10,10,undefined)).toBeCloseTo(10)
});

test("Nota a3 não pode ser negativa ", function(){
    expect(() =>calcularMediaAluno(1,2,-1)).toThrow("Nota a3 não pode ser negativa");
});


test ("Qual a melhor combinaçâo? ", function(){
    expect(calcularMediaAluno(10,2,10)).toBeCloseTo(10)
    expect(calcularMediaAluno(2,10,10)).toBeCloseTo(10)
});
