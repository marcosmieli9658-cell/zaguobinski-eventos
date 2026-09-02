'use client';
import {
  ArrowUpRight,
  ArrowDown,
  Flame,
  ChefHat,
  Utensils,
  Heart,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import MenuExplorer from '@/components/menu-explorer';
import QuoteForm from '@/components/quote-form';
const base = '/zaguobinski-eventos';
const services = [
  { icon: ChefHat, text: 'Equipe de churrasqueiros' },
  { icon: Utensils, text: 'Estrutura de buffet' },
  { icon: Flame, text: 'Preparo na brasa' },
  { icon: Heart, text: 'Reposição durante o evento' },
];
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="header">
        <a
          className="brand"
          href={base + '/'}
          aria-label="Zaguobinski Eventos, início"
        >
          <img src={base + '/images/logo.jpeg'} alt="" width="62" height="62" />
          <span>
            ZAGUOBINSKI<small>EVENTOS & CHURRASCOS</small>
          </span>
        </a>
        <nav
          aria-label="Navegação principal"
          className={menuOpen ? 'nav open' : 'nav'}
        >
          <a href="#experiencia" onClick={() => setMenuOpen(false)}>
            A experiência
          </a>
          <a href="#cardapios" onClick={() => setMenuOpen(false)}>
            Nossos cardápios
          </a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>
            Seu evento
          </a>
        </nav>
        <a className="button small header-cta" href="#contato">
          Vamos celebrar <ArrowUpRight size={16} />
        </a>
        <Button
          className="menu-toggle"
          variant="ghost"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </header>
      <main id="conteudo">
        <section className="hero">
          <div className="hero-image" />
          <div className="hero-shade" />
          <div className="hero-inner">
            <p className="eyebrow">
              <span /> CHURRASCO DE VERDADE. MOMENTOS INESQUECÍVEIS.
            </p>
            <h1>
              FEITO NA BRASA.
              <br />
              SERVIDO COM
              <br />
              <em>PAIXÃO.</em>
            </h1>
            <p className="hero-copy">
              O fogo aceso, a mesa farta e as pessoas que importam.
              <br className="desktop-break" /> A experiência completa para o seu
              próximo evento.
            </p>
            <div className="hero-actions">
              <a className="button" href="#contato">
                Quero essa experiência <ArrowUpRight size={20} />
              </a>
              <a className="text-link" href="#cardapios">
                Explorar cardápios <ArrowDown size={16} />
              </a>
            </div>
          </div>
          <div className="hero-stamp">
            <Flame size={25} />
            <span>
              BOM CHURRASCO.
              <br />
              BONS MOMENTOS.
            </span>
          </div>
          <div className="hero-bottom">
            <span>BRASA ACESA. MEMÓRIAS À MESA.</span>
            <a href="#experiencia">
              Sinta a experiência <ArrowDown size={14} />
            </a>
            <span className="preview-label">PRÉVIA DE APRESENTAÇÃO</span>
          </div>
        </section>
        <div className="ribbon" aria-hidden="true">
          <span>Fogo, sabor & boas histórias</span>
          <Flame />
          <span>Churrasco feito para reunir</span>
          <Flame />
          <span>Do primeiro aroma ao último brinde</span>
          <Flame />
        </div>
        <section className="intro section" id="experiencia">
          <div>
            <p className="eyebrow">A EXPERIÊNCIA ZAGUOBINSKI</p>
            <h2>
              VOCÊ VIVE O MOMENTO.
              <br />A GENTE CUIDA
              <br />
              <em>DO SABOR.</em>
            </h2>
          </div>
          <div className="intro-body">
            <p>
              Um bom evento tem conversa solta, mesa cheia e aquele aroma de
              churrasco que todo mundo reconhece.
            </p>
            <p>
              Levamos a experiência da brasa para a sua celebração, com equipe
              de churrasqueiros, cozinha, estrutura de buffet e reposição
              durante o evento. Para você estar onde realmente importa: junto
              dos seus convidados.
            </p>
            <a className="text-link dark-link" href="#cardapios">
              Encontre o sabor do seu evento <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="service-strip">
            {services.map(({ icon: Icon, text }) => (
              <div key={text}>
                <Icon size={25} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>
        <MenuExplorer />
        <section className="ritual-section">
          <div className="ritual-photo" />
          <div className="ritual-content">
            <p className="eyebrow">UM RITUAL QUE MERECE SER VIVIDO</p>
            <h2>
              FICA O SABOR.
              <br />
              FICAM <em>AS HISTÓRIAS.</em>
            </h2>
            <p>
              Tem coisa que só o fogo, o tempo e uma boa companhia conseguem
              fazer. O churrasco é uma delas.
            </p>
            <a className="text-link" href={`${base}/cardapios/fogo-de-chao/`}>
              Conheça a experiência Fogo de Chão <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
        <section className="section journey-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">DA PRIMEIRA CONVERSA AO PRIMEIRO PRATO</p>
              <h2>
                VOCÊ IMAGINA.
                <br />
                <em>A GENTE PREPARA.</em>
              </h2>
            </div>
            <p>
              Um caminho simples para
              <br />
              receber bem e aproveitar.
            </p>
          </div>
          <div className="journey-grid">
            {[
              [
                '01',
                'Conte seu plano',
                'Data, cidade, ocasião e número de convidados. É por aqui que começamos.',
              ],
              [
                '02',
                'Escolha o sabor',
                'Conheça os cardápios e converse com a equipe sobre os detalhes do seu evento.',
              ],
              [
                '03',
                'Acerte os detalhes',
                'Receba uma proposta e confirme atendimento, disponibilidade e estrutura.',
              ],
              [
                '04',
                'Viva o momento',
                'No dia combinado, a brasa encontra a sua celebração. Você aproveita a companhia.',
              ],
            ].map(([n, t, d]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section faq-section">
          <div>
            <p className="eyebrow">ANTES DE ACENDER A BRASA</p>
            <h2>
              BOAS PERGUNTAS.
              <br />
              <em>RESPOSTAS CLARAS.</em>
            </h2>
          </div>
          <div className="faq-list">
            {[
              [
                'O que acompanha o serviço?',
                'Os materiais da Zaguobinski incluem equipe de churrasqueiros, equipe de cozinha, estrutura completa de buffet e reposição durante o evento. A composição do cardápio e as condições são confirmadas no orçamento.',
              ],
              [
                'Pratos e talheres estão inclusos?',
                'Não. Os cardápios informam que pratos e talheres não são fornecidos e podem ser locados à parte. Converse com a equipe sobre a locação e as necessidades do evento.',
              ],
              [
                'Quais cidades vocês atendem?',
                'Informe a cidade e o local do evento para que a equipe confirme a cobertura, a logística e a disponibilidade. Não há uma área de atendimento fechada publicada nesta prévia.',
              ],
              [
                'Como funciona o valor por pessoa?',
                'O valor é informado mediante orçamento, conforme o cardápio e as características do evento. Envie a data, a cidade e o número de convidados para receber uma proposta.',
              ],
              [
                'Posso escolher uma opção de massa?',
                'Sim. Os cinco cardápios oferecem uma opção entre lasanha, rondelli e nhoque. Confirme sua escolha e os demais itens com a equipe.',
              ],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <QuoteForm />
      </main>
      <footer className="footer">
        <a href={base + '/'} className="footer-brand">
          ZAGUOBINSKI EVENTOS
        </a>
        <span>Bom churrasco. Bons momentos.</span>
        <div>
          <a
            href="https://www.instagram.com/zaguobinski_eventos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram <ArrowUpRight size={12} />
          </a>
          <a href={base + '/privacidade/'}>Privacidade</a>
        </div>
        <small>Prévia de apresentação · Imagens ilustrativas.</small>
      </footer>
    </>
  );
}
