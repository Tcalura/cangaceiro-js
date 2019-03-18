class Negociacoes {

  constructor() {
    this._negociacoes = [];
    Object.freeze(this);
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  esvazia() {
    this._negociacoes.length = 0;
  }

  paraArray() {
    // retorna uma copia da lista de objs e nao a lista original 
    // esse metodo é para apenas consulta nao manipulação 
    return [].concat(this._negociacoes);
  }

  get volumeTotal(){
    return this._negociacoes
        .reduce((total, negociacao) =>
            total + negociacao.volume, 0);
  }

}