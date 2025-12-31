export class Elemento{
    nome: string;
    prioridade: number;

    constructor(identificacao: string, nivelPrioridade: number){
        this.nome = identificacao;
        this.prioridade = nivelPrioridade;
    }  
}