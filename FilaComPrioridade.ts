import { Elemento } from "./Elemento";


export class FilaPrioridade{
    fila: Elemento[];
    tamanhoFila: number;

    constructor(tamanho: number){
        this.tamanhoFila = tamanho;
        this.fila =[];
    }

    estaCheia(): boolean{
        return (this.fila.length == this.tamanhoFila)
          
    }

    estaVazia(): boolean{
        return (this.fila.length == 0);
    }

    adicionarElemento(info: Elemento){
        if(this.estaCheia()){
           alert('A fila de prioridades está cheia!')
        }else{
            this.fila.push(info);
            this.fila.sort((a,b) => b.prioridade - a.prioridade);
        }
    
    }

    atenderPrimeiro(){
        if(this.estaVazia()){
            alert('A fila de prioridades está vazia!')
        }else{
            alert(`Elemento de maior prioridade a ser atendido:\n Nome: ${this.fila[0].nome} \n Prioridade: ${this.fila[0].prioridade}`);
            this.fila.shift();
        }
    }
    exibirElementos(){
        let relacao: string = '';

        if(this.estaVazia()){
            relacao = ('A fila de prioridades está vazia!');
        }else{
            for(let i = 0; i < (this.fila.length); i++){
            relacao += `Nome: ${this.fila[i].nome} \nPrioridade: ${this.fila[i].prioridade}\n\n`;
            }
        }
        alert(relacao);
    }

    infoVazia(){
        if(this.estaVazia()){
            alert('A lista de prioridades está vazia!');
        } else{
            alert('A fila de prioridades possui elementos!');
        }
    }

    infoCheia(){
        if(this.estaCheia()){
            alert('A lista de prioridades está cheia!');
        }else{
            alert('A fila de prioridades não está cheia!');
        }
    }

    qtdeAtendimentos(){
        alert(`A fila possui: ${this.fila.length} atendimentos a realizar!`);
    }

    proxAtender(){
        if(this.estaVazia()){
            alert('A fila está vazia !');
        }else{
            alert(`Próximo elemento a ser atendido:\n Nome: ${this.fila[0].nome} \n Prioridade: ${this.fila[0].prioridade}`);
        };
    }

    esvaziarLista(){
        if(this.estaVazia()){
           alert('A fila de prioridades está vazia!')
        }else{
            while (this.fila.length > 0){
                this.fila.shift();
            };
        }
    } 
}