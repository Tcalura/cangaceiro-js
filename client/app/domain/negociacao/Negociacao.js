// client/app/domain/negociacao/Negociacao.js
class Negociacao {

  
    
    constructor(_data, _quantidade, _valor) {
      Object.assign(this, { _quantidade, _valor })
      this._data = new Date(_data.getTime());
      Object.freeze(this);
      // this._data = data;
      // this._quantidade = quantidade;
      // this._valor = valor;
      Object.freeze(this);
  }
  

  get volume() {
    return this._quantidade * this._valor;
  }
  get data() {
    return this._data;
  }
  get quantidade() {
   return this._quantidade;
  }
  get valor() {
    return this._valor;
  }
} 