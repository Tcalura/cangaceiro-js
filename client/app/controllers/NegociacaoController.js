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

    // ALTERADO PARA SER CHAMANDO O MÉTODO ESTÁTICO
    let negociacao = new Negociacao(
      DateConverter.paraData(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );

    // ALTERADO PARA SER CHAMANDO O MÉTODO ESTÁTICO
    let diaMesAno = DateConverter.paraTexto(negociacao.data);
    console.log((diaMesAno));


  }
}