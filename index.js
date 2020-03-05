const alunosDaEscola = [
{nome:"Henrique",notas:[],cursos:[],faltas:5},
{nome:"Edson",notas:[],cursos:[],faltas:2},
{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
{nome:"Carlos",notas:[],cursos:[],faltas:0},
{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

function adicionarAluno(nome){
  alunosDaEscola.push({nome:nome,notas:[],cursos:[],faltas:0});
  console.log("Aluno(a) " + nome + " adicionado(a) com sucesso no sistema\n");
}
 
function listarAlunos(){
  console.log("LISTA DE ALUNOS:")
  console.log("________________________________________");
  alunosDaEscola.forEach(alunos => {
    let cursosDaEscola = alunos.cursos.map(cursos => {
      return cursos.nomeDoCurso;
    })
    console.log("Nome: " + alunos.nome);
    (alunos.cursos.length != 0)? console.log("Cursos: " + cursosDaEscola): console.log("Cursos: Nenhum");
    (alunos.notas.length != 0)? console.log("Notas: " + alunos.notas): console.log("Notas: Não possui");
    console.log("Faltas: " + alunos.faltas);
    console.log("________________________________________");
  });
  console.log("");
}

function buscarAluno(nome){
  alunosDaEscola.find(alunos => alunos.nome == nome)?
  console.log("Aluno(a) " + nome + " foi encontrado(a) na busca\n"):
  console.log("Aluno(a) " + nome + " não foi encontrado(a) na busca\n");
}

function matricularAluno(aluno, curso){
  if (alunosDaEscola.find(alunos => (alunos.nome == aluno))) {
    alunosDaEscola.forEach(alunos => {
      if(alunos.nome == aluno) {
        alunos.cursos.push({nomeDoCurso: curso, dataMatricula: new Date});
        console.log("Aluno(a) " + aluno + " matriculado(a) com sucesso no curso\n");
      } 
    })
  } else {
    console.log("Aluno(a) " + aluno + " não pode ser matriculado(a) no curso pois não foi encontrado(a)\n");
  }
}

function aplicarFalta(aluno){
  if (alunosDaEscola.find(alunos => (alunos.nome == aluno) && (alunos.cursos.length != 0))) {
    alunosDaEscola.forEach(alunos => {
      if (alunos.nome == aluno) {
        alunos.faltas++;
        console.log("Falta aplicada a " + aluno + " com sucesso\n");
      }
    })
  } else {
    console.log("A falta não pode ser aplicada pois " + aluno + " não está matriculado(a) em nenhum curso\n");
  }
}
  
function aplicarNota(aluno, nota){
  if (alunosDaEscola.find(alunos => (alunos.nome == aluno) && (alunos.cursos.length != 0))) {
    alunosDaEscola.forEach(alunos => {
      if ((alunos.nome == aluno)) {
        alunos.notas.push([nota]);
        console.log("Nota aplicada a " + aluno + " com sucesso\n");
      }
    })
  } else {
    console.log("A nota não pode ser aplicada pois " + aluno + " não está matriculado(a) em nenhum curso\n");
  }
}

function aprovarAluno(aluno){
  if (alunosDaEscola.find(alunos => (alunos.nome == aluno) && (alunos.cursos.length != 0))) {
    alunosDaEscola.forEach(alunos => {
      if (alunos.nome == aluno) {
        let somaNotas = alunos.notas.reduce((total, nota) => parseInt(total) + parseInt(nota));
        let mediaNotas = somaNotas / alunos.notas.length;
        if ((mediaNotas >= 7) && (alunos.faltas <= 3)) {
          console.log("Aluno(a) " + aluno + " aprovado(a)\n");
        } else {
          console.log("Aluno(a) " + aluno + " reprovado(a)\n");
        }
      }
    })
  } else {
    console.log("Aluno(a) " + aluno + " não encontrado(a)\n");
  }  
}

console.log("");
adicionarAluno('João');
buscarAluno('Maria');
buscarAluno('João');
matricularAluno('Maria', 'PHP');
matricularAluno('João', 'PHP');
aplicarFalta('Maria');
aplicarFalta('João');
aplicarNota('Maria', 10);
aplicarNota('João', 6);
aprovarAluno('Maria');
aprovarAluno('João');
aprovarAluno('Guilherme');

//listarAlunos();