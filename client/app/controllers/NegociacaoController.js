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
    let data = new Date(this._inputData.value.replace(/-/g, ','));
    console.log(data);

    let negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
    console.log(negociacao);
  }
}