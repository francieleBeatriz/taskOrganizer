export class Botao {
  constructor(className, imgSrc, altTexto) {
    this.className = className;
    this.imgSrc = imgSrc;
    this.altTexto = altTexto;
  }

  criarBotao() {
    const botao = document.createElement("button");
    botao.className = `action-btn ${this.className}`;
    botao.innerHTML = `<img src="${this.imgSrc}" alt="${this.altTexto}">`;

    return botao;
  }
}
