const alunos = require("../dados/dados");

let identificadorAluno = 1;

const listarAlunos = (req, res) => {
  const exibirAlunos = alunos;
  return res.status(200).json(exibirAlunos);
};
const obterAluno = (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res
      .status(400)
      .json({ mensagem: "Necessário enviar um número de id" });
  }

  const idAluno = alunos.find((aluno) => {
    return aluno.id === Number(id);
  });

  if (!idAluno) {
    return res.status(404).json({ mensagem: "Aluno não encontrado!" });
  }

  return res.status(200).json(idAluno);
};
const cadastrarAluno = (req, res) => {
  const { nome, sobrenome, idade, curso } = req.body;

  if (!nome || !sobrenome || !idade || !curso) {
    return res
      .status(400)
      .json("É obrigatório o preenchimento de todos os campos!");
  }

  if (nome.trim() === "" || sobrenome.trim() === "" || curso.trim() === "") {
    return res.status(400).json("Nenhum campo pode ficar vazio!");
  }

  if (idade < 18) {
    return res.status(400).json("Aluno é menor de 18 anos.");
  }

  const aluno = {
    id: identificadorAluno,
    nome,
    sobrenome,
    idade,
    curso,
  };

  identificadorAluno++;

  alunos.push(aluno);

  return res.status(201).send();
};

const excluirAluno = (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res
      .status(400)
      .json({ mensagem: "Necessário enviar um número de id" });
  }

  const idAluno = alunos.findIndex((aluno) => {
    return aluno.id === Number(id)
  });

  if (idAluno < 0) {
    return res.status(404).json({ mensagem: "Aluno não encontrado!" });
  }

  const excluirAluno = alunos.splice(idAluno, 1)[0];

  return res.status(200).json(excluirAluno);
};

module.exports = {
  listarAlunos,
  obterAluno,
  cadastrarAluno,
  excluirAluno,
};
