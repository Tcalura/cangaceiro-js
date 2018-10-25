class NegociacaoController {
  
  constructor(){
    // a ideia é que $ seja o querySelector
    // realizando o bind, $ mantém document como seu contexto this
    let $ = document.querySelector.bind(document);
    // buscando os elementos
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  }

  adiciona(event) {
    // cancelando a submissão do formulário
    event.preventDefault();
    // spread operator ... faz com que cada posição do array se torne um parametro do construtor
    let data = new Date(
      ...this._inputData.value
      .split('-')
      .map((item, indice) => item - indice % 2)
    );
    console.log(data);

    let negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
    console.log(negociacao);
  }
}