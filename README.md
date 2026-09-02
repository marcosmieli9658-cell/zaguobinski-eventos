# Zaguobinski Eventos

Prévia comercial do site de churrasco e buffet para eventos.

Site: https://marcosmieli9658-cell.github.io/zaguobinski-eventos/

## Experiência

- Identidade original em preto, brasa e creme, tipografia editorial e imagem ilustrativa de abertura.
- Cinco cardápios, alternância interativa, ampliação das artes e páginas com composição completa.
- Formulário local que prepara uma mensagem de WhatsApp; o visitante confirma o envio no aplicativo.
- Layout responsivo, navegação por teclado, foco visível e preferência de movimento reduzido.
- Metadados de compartilhamento específicos, fontes locais e HTML pré-renderizado.
- Sem rastreadores, testemunhos inventados, preços por pessoa ou cidades não confirmadas.

## Publicação

Somente esta pasta pertence ao repositório público. Proposta comercial, CNPJ do proponente e arquivos internos não estão incluídos.

`npm ci` instala as dependências. `npm run dev` inicia a edição local. `npm run build` exporta e verifica as páginas em `dist/client`.

O workflow publica `dist/client` no GitHub Pages após cada push em `codex/site-preview`. O script de preparação acomoda o prefixo do projeto e cria as rotas com `index.html`; necessário para a exportação do Vinext beta.8.

## Aprovação antes do lançamento definitivo

Confirmar contatos, composição dos cardápios, cidade/região de atendimento, disponibilidade, imagens reais e informações institucionais com a empresa. A prévia usa `noindex, nofollow`. Remover apenas após aprovação, acrescentar domínio definitivo e dados estruturados com informações verificadas. SEO/AEO/GEO não significam garantia de posição, tráfego ou citação em IA.

## Mídia

Logo e artes de cardápio fornecidos pelo cliente. Fotos de ambientação criadas por IA, identificadas como ilustrativas no rodapé. Não representam trabalhos reais executados pela empresa.

Imagem de abertura: picanha fatiada em tábua escura à direita, fogo e brasa âmbar ao fundo, espaço negativo preto à esquerda, estética gastronômica cinematográfica sem pessoas ou textos. Arquivo: `public/images/hero.jpg`.

Imagem social: composição carvão, creme e laranja com picanha e os textos exatos “ZAGUOBINSKI EVENTOS” e “Bom churrasco. Bons momentos.” Arquivo: `public/og.jpg`.

Vídeo Veo: direção preparada no Flow. A inclusão do arquivo final depende de geração e download bem-sucedidos; não há vídeo falso ou substituição por animação de foto.

## Verificação

Build, TypeScript e lint sem erros. A exportação verifica as 7 páginas, recursos locais, imagens sociais dos cardápios e ausência de dados privados da proposta. Testes visuais no navegador ainda não foram realizados.

WebMCP: a seleção assistida `select_churrasco_menu` é opcional e depende de `document.modelContext`. Não foi encontrado contexto compatível para executar a validação do contrato nesta sessão; não considerar esse recurso validado. A seleção manual não depende dele.

Referência de publicação: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
