class NegociacaoController {
  
  constructor(){
    // a ideia é que $ seja o querySelector
    // realizando o bind, $ mantém document como seu contexto this
    const $ = document.querySelector.bind(document);
    // buscando os elementos
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

    this._negociacoes = new Bind( 
      new Negociacoes,
      new NegociacoesView('#negociacoes'),
      'adiciona', 'esvazia'
    );

    this._mensagem = new Bind(
      new Mensagem,
      new MensagemView('#mensagemView'),
      'texto'      
    );

    this._service = new NegociacaoService();
  }

  adiciona(event) {
    try {
      event.preventDefault();
      this._negociacoes.adiciona(this._criaNegociacao());
      this._mensagem.texto = 'Negociação adicionada com sucesso';

      this._limpaFormulario();
    } catch (err) {

      console.log(err);

      if(err instanceof DataInvalidaException) {
        this._mensagem.texto = err.message;
      } else {
        this._mensagem.texto = 'Um erro não esperado aconteceu. Entre em contato com o suporte';
      }

    }
  }

  _criaNegociacao() {
    // retorna uma instância de negociação
    return new Negociacao(
      DateConverter.paraData(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
  }

  _limpaFormulario(){
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }

  apaga() {
    this._negociacoes.esvazia();
    this._mensagem.texto = 'Negociações apagadas com sucesso';
  }
  // 13.5 RESOLVENDO PROMISES SEQUENCIALMENTE
  impotaNegociacoes(){
    const negociacoes = [];

    this._service.obtemNegociacoesDaSemana()
      .then(semana => {
        negociacoes.push(...semana);
        return this._service.obtemNegociacoesDaSemanaAnterior();
      })
      .then(anterior => {
        negociacoes.push(...anterior);
        return this._service.obtemNegociacoesDaSemanaRetrasada();
      })
      .then(retrasada => {
        negociacoes.push(...retrasada);
        negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));
        this._mensagem.texto = 'Negociações importadas com sucesso';
      })
      .catch(err => this._mensagem.texto = err); 
  }
  
}