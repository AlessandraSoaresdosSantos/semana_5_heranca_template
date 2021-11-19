import { Pessoa } from "./Pessoa";

export class PessoaFisica extends Pessoa{
    _cpf;
    _pis;
    _nomeMae;
    _nomePai;

    constructor(nome, endereco, cpf, pis, nomeMae, nomePai)
    {
       super(nome, endereco)
       this._cpf = cpf
       this._pis = pis
       this._nomeMae = nomeMae
       this._nomePai = nomePai
    }

    set nomePai(novo_nome_pai){
        this._nomePai = novo_nome_pai
    }

    get nomePai(){return this._nomePai}

    set nomeMae(novo_nome_mae)
    {
        this._nomeMae = novo_nome_mae
    }

    get nomeMae(){return this._nomeMae}

    set pis(novo_pis){
        this._pis = novo_pis
    }

    get pis(){return this._pis}


    set cpf(novo_cpf){
        this._cpf = novo_cpf
    }

    get cpf(){return this._cpf}




}