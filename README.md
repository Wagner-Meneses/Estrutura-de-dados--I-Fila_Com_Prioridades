# Estrutura-de-dados--I-Fila_Com_Prioridades
Fila com Prioridades / Disciplina Estrutura de Dados I / ADS Mod II / IFPI    
Aluno: Wagner Veras Meneses  
--  
# Fila com Prioridade

A fila de prioridade nada mais é que uma fila comum que permite que elementos sejam adicionados associados com uma prioridade. Cada elemento na fila deve possuir um dado adicional que representa sua prioridade de atendimento. Uma regra explicita define que o elemento de maior prioridade (o que tem o maior número associado) deve ser o primeiro a ser removido da fila, quando uma remoção é requerida.   

Nesse projeto a Fila de Prioridades apresenta cinco níveis:

  1. Muito baixa
  2. Baixa
  3. Normal
  4. Alta
  5. Muito alta

A estrutura permmite armazenar elementos com diferentes prioridades, e o processamento dos elementos respeita a ordem das prioridades.
No momento da implementação da fila o usuário define sua capacidade máxima. 

O sistema apresenta opções de interação com usuário.
  1- Adicionar novo atendimento (nome e prioridade);
  2- Atender o primeiro elemento da fila e removê-lo em seguida;
  3- Verificar o próximo elemento da fila a ser atendido;
  4- Verificar se a fila está vazia;
  5- Verificar se a fila está cheia;
  6- Exibir a quantidades de atendimentos a realizar;
  7- Esvaziar a fila;
  8- Exibir todos os elementos da fila (apresentado nome e prioridade);
  0- Sair do sistema.

  
  # Tecnologias
* Linguagem: TypeScript
* Empacotador: Parcel
* Execução: Navegador (utilizando prompt/alert para interação)

 # Pré-requisitos  
* Node.js 
* npm

# Como executar  
1. Instale as dependências:
* npm install
2. Inicie o servidor de desenvolvimento:
* npm run start
3. Acesse no navegador:
* http://localhost:1234 (porta padrão do Parcel)

# Estrutura do Projeto
* index.html: ponto de entrada HTML
* index.ts: menu interativo com prompt/alert
* Elemento.ts: classe Elemento (definição de nome e prioridade de cada elemento a compor a fila)
* FilaPrioridade.ts: classe Fila com prioridade (cadastro de elementos e funçôes carcterísticas da fila)

 


