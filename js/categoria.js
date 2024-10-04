import { Botao } from "./Botao.js";

function adiconarTarefa() {
  const INPUT_TAREFA = document.getElementById("input-tarefa").trim();
  console.log(INPUT_TAREFA);
}

function voltarPagina() {
  const BTN_VOLTAR = document.getElementById("btn-voltar");

  BTN_VOLTAR.addEventListener("click", () => {
    window.location.href = "../index.html";
  });
}
voltarPagina();

const TITULO_CATEGORIA = document.querySelector(".title-category");

const NOME_CATEGORIA = localStorage.getItem("nome_categoria");

if (NOME_CATEGORIA) {
  TITULO_CATEGORIA.textContent = NOME_CATEGORIA;
}

const BOTAO_EDITAR_CATEGORIA = new Botao(
  "btn-editar",
  "../images/icon-edit.svg",
  "ìcone de editar a Categoria"
).criarBotao();

TITULO_CATEGORIA.appendChild(BOTAO_EDITAR_CATEGORIA);
