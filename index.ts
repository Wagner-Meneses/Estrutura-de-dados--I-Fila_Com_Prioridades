import { Elemento } from "./Elemento";
import { FilaPrioridade } from "./FilaComPrioridade";


alert('BEM VINDO AO PROJETO DE ESTRUTURA DE DADOS - FILA COM PRIORIDADE');
let numElementos: number = Number(prompt('Digite o número máximo de atendimentos na fila com prioridade'));

const atendimento: FilaPrioridade = new FilaPrioridade(numElementos);

let operacao : number = 1;

while(operacao!=0){
    operacao = Number(prompt('Digite a opção desejada:\n1 - Adicionar novo atendimento\n2 - Atender / Remover o 1º elemento da fila e retornar seus dados\n3 - Próximo elemento da fila a ser atendido\n4 - Verificar se a fila está vazia\n5 - Verificar se a fila está cheia\n6 - Exibir a quantidade de atendimentos a realizar\n7 - Esvaziar a fila \n8 - Exibir todos os atendimentos a realizar\n0 - Sair'))!;
    switch(operacao){
        case 1:
            let nomeElemento: string = prompt('Digite o nome da pessoa a ser atendida')!;
            let prioridade: number = Number(prompt('Digite a prioridade \n1. Muito Baixa \n2. Baixa \n3. Normal \n4. Alta \n5. Muito Alta'));

            let elementoAdd: Elemento = new Elemento(nomeElemento, prioridade)

            atendimento.adicionarElemento(elementoAdd);
            break;
        case 2:
           atendimento.atenderPrimeiro();
            break;
        case 3:
           atendimento.proxAtender();
            break;
        case 4:
            atendimento.infoVazia();
            break;
        case 5:
           atendimento.infoCheia();
            break;
        case 6:
           atendimento.qtdeAtendimentos();
            break;
        case 7:
           atendimento.esvaziarLista();
            break;
        case 8:
           atendimento.exibirElementos();
            break;
        case 0:
            alert('Obrigado por usar o projeto de fila com prioridade.');
            break;
        default:
            alert('Opção inválida');
            break;
    }
}
