# Jogo da Memória

Este é um jogo da memória desenvolvido com React, TypeScript, TailwindCSS e Vite. O objetivo do jogo é encontrar todos os pares de cartas no menor tempo possível e com o menor número de movimentos.

## Funcionalidades

- **Seleção de Dificuldade**: Escolha entre três níveis de dificuldade: Fácil, Médio e Difícil.
- **Cronômetro**: Acompanhe o tempo gasto para completar o jogo.
- **Contador de Movimentos**: Veja quantos movimentos foram necessários para completar o jogo.
- **Suporte a Idiomas**: O jogo suporta múltiplos idiomas (Português e Inglês).
- **Animações**: Transições suaves e animações para uma experiência mais agradável.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface do usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **TailwindCSS**: Framework CSS para estilização.
- **Vite**: Ferramenta de build rápida para desenvolvimento web moderno.
- **i18next**: Biblioteca para internacionalização.
- **Lucide Icons**: Conjunto de ícones para melhorar a interface.

## Estrutura do Projeto

```plaintext
src/
├── components/          # Componentes reutilizáveis
├── hooks/               # Hooks personalizados
├── lib/                 # Funções utilitárias e configuração de internacionalização
├── translations/        # Arquivos de tradução
├── types.ts             # Tipos TypeScript
├── constants.ts         # Constantes do projeto
├── App.tsx              # Componente principal do aplicativo
├── main.tsx             # Ponto de entrada do React
```

## Como Executar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd memory-game
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```

4. **Acesse o jogo**:
   Abra o navegador e vá para [http://localhost:5173](http://localhost:5173).

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Realiza o build do projeto para produção.
- `npm run preview`: Visualiza o build de produção.
- `npm run lint`: Executa o linter para verificar problemas no código.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
