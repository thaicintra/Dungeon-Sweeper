# Dungeon Sweeper

## Integrantes

- Thaíssa Cintra de Mattos
- Victor Hugo Andrade

## Título provisório

Dungeon Sweeper

## Modalidade

Jogo web

## Descrição da aplicação

Dungeon Sweeper é um jogo roguelike que mistura Campo Minado com RPG de mesa. O jogador explora andares de uma masmorra gerada proceduralmente. Ao revelar uma célula com monstro, enfrenta um combate simples e perde pontos de vida (HP) conforme o resultado. O objetivo é usar os números do Campo Minado para evitar monstros e avançar o máximo de andares possível antes que o HP acabe.

### Funcionalidades (MVP)

- **Tabuleiro procedural:** grade gerada a cada andar, com monstros em posições aleatórias e contagem de ameaças vizinhas.
- **Pontos de vida:** o HP inicial depende da dificuldade. A partida termina quando o HP chega a zero.
- **Combate simples:** ao revelar um monstro, ocorre uma rodada de combate resolvida no próprio jogo (rolagem de dado contra os atributos do monstro). O resultado altera o HP.
- **Progressão:** ao revelar todas as células seguras, o jogador avança para um andar maior e com monstros mais fortes.
- **Recorde:** o maior andar alcançado é salvo no navegador (`localStorage`) e exibido no menu.
- **Início e reinício:** "Nova partida" no menu, "Reiniciar" durante o jogo e "Jogar novamente" no fim de jogo.
- **Configuração de dificuldade (Fácil, Normal, Difícil):** muda o tamanho do tabuleiro, a quantidade de monstros e o HP inicial.
- **Feedback:** barra de HP atualizada, mensagem a cada evento (ex.: "Você encontrou um Goblin! -3 HP"), efeito visual ao receber dano, indicador de carregamento e mensagem de erro da API.
- **Telas:** menu principal, regras, jogo e fim de jogo.

### Estados da partida

Menu, carregando, em andamento, combate, andar concluído e fim de jogo.

### Fora do MVP

Inventário, poções, ouro, baús, magias, itens mágicos e histórico de partidas.

## API externa pretendida

**Open5e API** (`https://open5e.com/`): API pública e gratuita de dados de D&D 5e.

- Fornece apenas **dados**: no início de cada andar, o jogo busca em `/monsters/` monstros compatíveis com o andar (nome, nível de desafio, pontos de vida e dano).
- **A Open5e não controla eventos em tempo real.** O próprio jogo decide quando há encontro, resolve o combate, calcula o dano e controla a progressão.
- Se a API falhar, o jogo usa uma lista local de monstros.

## Justificativa dos requisitos técnicos

- **React + TypeScript (Vite, tsconfig estrito):** o jogo é uma interface com muito estado e muitas partes que se atualizam, o que se encaixa bem em React. O TypeScript estrito tipa os dados do jogo, como célula, monstro, partida e dificuldade.
- **Componentização:** tabuleiro, célula, barra de HP, painel de mensagens e telas são componentes reutilizáveis.
- **Biblioteca de estilo:** Tailwind CSS, para montar o visual em pixel art e a responsividade entre 320px e 1920px.
- **Gerenciamento de estado:** estado local em cada célula (revelada, marcada) e estado global via Context + `useReducer` para a partida (HP, andar, dificuldade e estado do jogo).
- **Hooks personalizados:** `useLocalStorage` (recorde), `useMonsters` (busca na API) e `useGame` (regras da partida).
- **Roteamento e navegação:** React Router para as telas de menu, regras, jogo e fim de jogo.
- **Consumo de API externa:** a Open5e fornece monstros reais por nível de desafio, com tratamento de carregamento e erro.
- **Testes unitários:** Vitest para geração do tabuleiro, contagem de vizinhos, combate e progressão de andar.
- **Persistência:** o recorde fica salvo em `localStorage` e continua disponível após recarregar a página.
