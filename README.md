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

`npm ci` instala as dependências. `npm run dev` inicia a edição local. `npm run build` exporta e verifica as páginas em `dist/client`. Depois do build, `npm run preview` serve exatamente o artefato do Pages em `http://127.0.0.1:4173/zaguobinski-eventos/` para testes, inclusive das rotas internas e do prefixo de recursos.

O workflow publica `dist/client` no GitHub Pages após cada push em `codex/site-preview`. O script de preparação acomoda o prefixo do projeto e cria as rotas com `index.html`; necessário para a exportação do Vinext beta.8.

## Aprovação antes do lançamento definitivo

Confirmar contatos, composição dos cardápios, cidade/região de atendimento, disponibilidade, imagens reais e informações institucionais com a empresa. A prévia usa `noindex, nofollow`. Remover apenas após aprovação, acrescentar domínio definitivo e dados estruturados com informações verificadas. SEO/AEO/GEO não significam garantia de posição, tráfego ou citação em IA.

## Mídia

Logo e artes de cardápio fornecidos pelo cliente. A foto atual de abertura foi enviada e aprovada pelo usuário. As outras imagens de ambientação foram criadas por IA. As imagens são identificadas como ilustrativas no rodapé; não são apresentadas como registros de trabalhos reais da empresa.

Imagem de abertura: foto aprovada de picanha malpassada fatiada, sal e uma fatia no garfo. Original preservado em `public/images/hero-picanha-aprovada.png` (826 × 620; 1.022.162 bytes). O site entrega `hero-picanha.webp` (134.890 bytes), 86,8% menor, sem mudar a composição da foto. Abertura com prioridade de carregamento, degradê escuro e recorte responsivo. A ambientação secundária usa `ritual.webp`, com carregamento adiado, derivada de `hero.jpg`. Para a versão definitiva, preferir um original de maior resolução e confirmar os direitos de uso.

Logo otimizado de 180.873 para 13.050 bytes. Artes de cardápio em WebP de 1024 px para exibição; originais JPEG de 1536 px preservados para ampliação. As duas fontes são locais; os pesos não utilizados da fonte de títulos foram removidos. A exportação verifica limites de tamanho para as imagens principais.

Imagem social: composição carvão, creme e laranja com picanha e os textos exatos “ZAGUOBINSKI EVENTOS” e “Bom churrasco. Bons momentos.” Arquivo: `public/og.jpg`.

Vídeo Veo cancelado pelo usuário. O hero usa somente a foto estática aprovada; nenhum vídeo foi baixado ou publicado.

## Verificação

Revisão de setembro de 2026: build, TypeScript e lint sem erros; auditoria das dependências de produção sem vulnerabilidades conhecidas na data do teste. A exportação verifica as 7 páginas, recursos locais, imagens sociais dos cardápios, limites de tamanho das imagens e ausência de dados privados da proposta.

Testes no navegador integrado com larguras de 320, 360, 390, 430, 768, 1024 e 1440 px. Revisados abertura, leitura, menu móvel, cinco seleções de cardápio, ampliação/fechamento da arte, páginas internas e formulário. Corrigidos títulos que excediam telas estreitas. Campos com fonte de 16 px e altura de 50 px; seleção de cardápios sem rolagem lateral no celular; botão de fechar a arte com área de 44 × 44 px. Contraste de texto dos botões principais aumentado de 3,51:1 para 4,89:1.

Fluxos do orçamento: campos obrigatórios, data passada rejeitada, data em aberto aceita, mensagem com cardápio escolhido preparada corretamente, foco na confirmação e necessidade de preparar novamente após editar. Nenhuma mensagem de teste foi enviada. O envio nativo do formulário fica desabilitado no HTML pré-renderizado, até que a lógica local esteja pronta. O menu móvel usa `details`/`summary`, podendo abrir antes do JavaScript.

São testes de navegador com viewport ajustado, não certificação em aparelhos físicos ou em todos os navegadores. Não foi produzido escore Lighthouse nem validação de Core Web Vitals de usuários reais. Antes do lançamento definitivo, conferir também Safari/iPhone e Android reais, além das informações comerciais.

WebMCP: a seleção assistida `select_churrasco_menu` é opcional e depende de `document.modelContext`. O navegador anunciou a ferramenta, mas a documentação da interface de chamada não estava disponível nesta sessão. Não considerar o contrato validado. A seleção manual foi testada e não depende desse recurso.

Referência de publicação: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
