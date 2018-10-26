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

    let converter = new DateConverter();
    let data = converter.paraData(this._inputData.value);

    let negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );

    let diamesano = converter.paraTexto(negociacao.data);
    console.log(diamesano);


  }
}