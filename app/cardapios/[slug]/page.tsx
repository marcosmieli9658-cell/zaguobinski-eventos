import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Flame } from 'lucide-react';
import { BASE, menus, pastas, whatsapp } from '@/lib/menus';
export function generateStaticParams() {
  return menus.map((m) => ({ slug: m.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = menus.find((x) => x.slug === slug);
  if (!m) return {};
  const image = `https://marcosmieli9658-cell.github.io${BASE}/cardapios/${m.slug}.jpeg`;
  return {
    title: `Cardápio ${m.name} | Zaguobinski Eventos`,
    description: m.description,
    openGraph: {
      title: `Cardápio ${m.name} | Zaguobinski Eventos`,
      description: m.description,
      images: [image],
      url: `https://marcosmieli9658-cell.github.io${BASE}/cardapios/${m.slug}/`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `Cardápio ${m.name}`,
      description: m.description,
      images: [image],
    },
  };
}
export default async function MenuPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = menus.find((x) => x.slug === slug);
  if (!m) notFound();
  const sections = [
    ['Carnes na brasa', m.meats],
    ['Entradas', m.starters],
    ['Acompanhamentos', m.accompaniments],
    ['Massas · uma opção', pastas],
    ['Sobremesas', m.desserts],
  ] as const;
  return (
    <main className="detail-page">
      <header className="detail-header">
        <a href={BASE + '/'} className="brand">
          <img
            src={BASE + '/images/logo-192.webp'}
            alt=""
            width="52"
            height="52"
          />
          <span>
            ZAGUOBINSKI<small>EVENTOS & CHURRASCOS</small>
          </span>
        </a>
        <a className="text-link" href={BASE + '/#cardapios'}>
          <ArrowLeft size={16} /> Todos os cardápios
        </a>
      </header>
      <div className="detail-title">
        <p className="eyebrow">
          <Flame size={15} />
          {m.tag}
        </p>
        <h1>{m.name.toUpperCase()}</h1>
        <p>{m.description}</p>
      </div>
      <div className="detail-layout">
        <div className="detail-content">
          {sections.map(([title, items]) => (
            <section key={title}>
              <h2>{title}</h2>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <aside>
          <a
            href={`${BASE}/cardapios/${m.slug}.jpeg`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${BASE}/cardapios/${m.slug}.webp`}
              alt={`Material original do cardápio ${m.name}`}
              width="1024"
              height="683"
              loading="lazy"
              decoding="async"
            />
          </a>
          <p>Clique na arte para consultar o material original.</p>
          <div className="detail-included">
            <h3>ESTRUTURA INCLUSA</h3>
            <p>
              Equipe de churrasqueiros, equipe de cozinha, estrutura completa de
              buffet e serviço de reposição durante o evento.
            </p>
            <p>
              Pratos e talheres não são fornecidos e podem ser locados à parte.
              Consulte condições.
            </p>
          </div>
        </aside>
      </div>
      <div className="detail-cta">
        <div>
          <p className="eyebrow">SEU EVENTO, DO SEU JEITO</p>
          <h2>VAMOS CELEBRAR?</h2>
          <p>
            Valor por pessoa sob consulta. Confirme a composição e a
            disponibilidade com a equipe.
          </p>
        </div>
        <a
          className="button"
          href={whatsapp(
            `Olá! Gostei do cardápio ${m.name} e quero um orçamento para meu evento.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          Orçar o {m.name} <ArrowUpRight size={20} />
        </a>
      </div>
      <footer className="footer">
        <a href={BASE + '/'}>Voltar ao início</a>
        <small>
          Prévia de apresentação · Cardápios sujeitos à confirmação.
        </small>
      </footer>
    </main>
  );
}
