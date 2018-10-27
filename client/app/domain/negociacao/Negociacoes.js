class Negociacoes {

  constructor() {
    this._negociacoes = [];
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  paraArray() {
    // retorna uma copia da lista de objs e nao a lista original 
    // esse metodo é para apenas consulta nao manipulação 
    return [].concat(this._negociacoes);
  }
}