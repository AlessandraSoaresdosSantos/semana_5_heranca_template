export class Pessoa{
    _nome;
    _endereco;

    constructor(nome, endereco){
        this._nome = nome
        this._endereco = endereco
    }

    set nome(novo_nome)
    {
       this._nome = novo_nome
    }

    get nome(){ return this._nome }

    set endereco(novo_endereco){
        this._endereco = novo_endereco
    }

    get endereco() { return this._endereco }
}
