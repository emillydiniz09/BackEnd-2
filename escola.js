const dadosDoAluno = require('./aluno.json');

console.log("=== Sistema escolar ===");
console.log(`Nome: ${dadosDoAluno.nome}`);
console.log(`Curso: ${dadosDoAluno.curso}`);
console.log(`Idade: ${dadosDoAluno}`);

if (dadosDoAluno.bolsista) {
    console.log("Status: Este aluno possui isenção de mensalidade.");
} else {
    console.log("Status: Mensalidade padrão,");
};

