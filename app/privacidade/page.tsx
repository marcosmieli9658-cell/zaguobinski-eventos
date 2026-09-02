import { BASE } from '@/lib/menus';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Privacidade da prévia | Zaguobinski Eventos',
  openGraph: {
    title: 'Privacidade da prévia | Zaguobinski Eventos',
    images: [],
  },
  twitter: { images: [] },
};
export default function Privacy() {
  return (
    <main className="privacy-page">
      <a className="text-link" href={BASE + '/'}>
        Voltar ao site
      </a>
      <p className="eyebrow">PRÉVIA DE APRESENTAÇÃO</p>
      <h1>PRIVACIDADE</h1>
      <p>
        Esta prévia apresenta os serviços da Zaguobinski Eventos. O formulário
        prepara uma mensagem no próprio navegador e não envia seus dados para um
        servidor do site.
      </p>
      <h2>Contato pelo WhatsApp</h2>
      <p>
        Ao clicar no botão de envio, você escolhe compartilhar as informações
        preenchidas com o WhatsApp e com a equipe da empresa. Confira a mensagem
        antes de enviá-la. O tratamento feito pelo WhatsApp segue as políticas
        desse serviço.
      </p>
      <h2>Navegação</h2>
      <p>
        A prévia não utiliza pixels de publicidade, cookies de análise ou
        cadastro de usuários. O provedor de hospedagem pode processar
        informações técnicas necessárias para disponibilizar a página. Os
        recursos visuais e fontes são hospedados com o site.
      </p>
      <h2>Informações e atendimento</h2>
      <p>
        Para dúvidas sobre seu atendimento e dados compartilhados com a empresa,
        fale pelo contato (41) 99629-2306. O conteúdo definitivo de privacidade
        será validado com o responsável antes do lançamento comercial.
      </p>
    </main>
  );
}
