import { Botao } from "./Botao.js";

function criarLinkCategoria() {
  const LINK = document.createElement("a");
  LINK.href = "../categoria.html";
  return LINK;
}

function criarItemCategoria(categoria) {
  const ITEM = document.createElement("li");
  ITEM.className = "name-category";
  ITEM.textContent = categoria;

  const BTN_DELETAR = new Botao(
    "btn-editar",
    "../images/icon-delete.svg",
    "Icone de deletar a tarefa."
  ).criarBotao();

  ITEM.appendChild(BTN_DELETAR);

  return ITEM;
}

function adicionarCategoria(categoria) {
  const ITEM_LISTA = criarItemCategoria(categoria);
  const LINK_LISTA = criarLinkCategoria();
  LINK_LISTA.appendChild(ITEM_LISTA);

  const LISTA = document.getElementById("list");
  LISTA.appendChild(LINK_LISTA);

  salvarConteudo();
}

function salvarConteudo() {
  const CARD_CATEGORIAS = document.getElementById("card").innerHTML;
  localStorage.setItem("salvarCardConteudo", CARD_CATEGORIAS);
}

function carregarConteudo() {
  const CONTEUDO_SALVO = localStorage.getItem("salvarCardConteudo");
  if (CONTEUDO_SALVO) {
    document.getElementById("card").innerHTML = CONTEUDO_SALVO;

    document.querySelectorAll("#list a").forEach((LINK) => {
      const categoria = LINK.textContent;
      LINK.addEventListener("click", () => {
        localStorage.setItem("nome_categoria", categoria);
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", carregarConteudo);

const BOTAO_ADICIONAR = document.getElementById("btn-adicionar");

BOTAO_ADICIONAR.addEventListener("click", () => {
  const INPUT_CATEGORIA = document
    .getElementById("input-category")
    .value.trim();

  if (INPUT_CATEGORIA === "") {
    alert("Insira uma categoria válida.");
  } else {
    adicionarCategoria(INPUT_CATEGORIA);
  }
});
