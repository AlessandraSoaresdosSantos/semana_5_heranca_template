import { Pessoa } from "./Pessoa.js";

export class PessoaJuridica extends Pessoa{
    _cnpj;
    _razaoSocial;

    constructor(nome, endereco, cnpj, razaoSocial)
    {
        super(nome, endereco)
        this._cnpj = cnpj
        this._razaoSocial = razaoSocial
    }

    set cnpj(novo_cnpj)
    {
        this._cnpj = novo_cnpj
    }

    get cnpj(){ return this._cnpj}

    set razaoSocial(nova_razaoSocial)
    {
        this._razaoSocial = nova_razaoSocial
    }

    get razaoSocial(){
        return this._razaoSocial
    }
}