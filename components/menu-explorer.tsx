'use client';
import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { ArrowUpRight, Check, Expand, Flame } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { BASE, menus } from '@/lib/menus';

type ToolContext = {
  registerTool: (
    tool: {
      name: string;
      title: string;
      description: string;
      inputSchema: object;
      annotations: object;
      execute: (input: unknown) => unknown;
    },
    options: { signal: AbortSignal },
  ) => void | Promise<void>;
};
export default function MenuExplorer() {
  const [selected, setSelected] = useState('premium');
  const [art, setArt] = useState(false);
  const menu = menus.find((m) => m.slug === selected)!;
  useEffect(() => {
    const ctx = (document as Document & { modelContext?: ToolContext })
      .modelContext;
    if (!ctx?.registerTool) return;
    const lifecycle = new AbortController();
    const register = async () => {
      try {
        await ctx.registerTool(
          {
            name: 'select_churrasco_menu',
            title: 'Selecionar cardápio',
            description:
              'Seleciona um dos cinco cardápios na prévia. Não envia mensagens nem solicita orçamento.',
            inputSchema: {
              type: 'object',
              properties: {
                slug: { type: 'string', enum: menus.map((m) => m.slug) },
              },
              required: ['slug'],
              additionalProperties: false,
            },
            annotations: { readOnlyHint: false, untrustedContentHint: false },
            execute: (input: unknown) => {
              if (
                !input ||
                typeof input !== 'object' ||
                !('slug' in input) ||
                !menus.some((m) => m.slug === input.slug)
              )
                throw new Error('Cardápio inválido');
              const found = menus.find((m) => m.slug === input.slug)!;
              flushSync(() => setSelected(found.slug));
              return {
                selected: found.slug,
                name: found.name,
                meats: found.meats,
              };
            },
          },
          { signal: lifecycle.signal },
        );
      } catch (error) {
        console.warn('Recurso de seleção assistida indisponível.', error);
      }
    };
    void register();
    return () => lifecycle.abort();
  }, []);
  return (
    <section className="section menu-section" id="cardapios">
      <div className="section-heading">
        <div>
          <p className="eyebrow">CINCO JEITOS DE CELEBRAR</p>
          <h2>
            O SEU EVENTO TEM
            <br />
            <em>UM SABOR PRÓPRIO.</em>
          </h2>
        </div>
        <p>
          Da tradição à seleção premium.
          <br />
          Escolha o cardápio que combina
          <br />
          com o seu jeito de receber.
        </p>
      </div>
      <Tabs
        value={selected}
        onValueChange={(value) => setSelected(String(value))}
        className="menu-tabs"
      >
        <TabsList className="menu-tab-list" aria-label="Escolha o cardápio">
          {menus.map((m, i) => (
            <TabsTrigger key={m.slug} value={m.slug} className="menu-tab">
              <span>0{i + 1}</span>
              {m.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {menus.map((m, i) => (
          <TabsContent key={m.slug} value={m.slug} className="menu-panel">
            <div className="menu-art">
              <div className="menu-art-top">
                <span>SELEÇÃO 0{i + 1}</span>
                <Flame size={18} />
              </div>
              <img
                src={`${BASE}/cardapios/${m.slug}.jpeg`}
                alt={`Cardápio original ${m.name} da Zaguobinski Eventos`}
                width="1536"
                height="1024"
                loading="lazy"
              />
              <Button
                className="art-expand"
                variant="ghost"
                onClick={() => setArt(true)}
              >
                <Expand size={14} /> Ampliar cardápio original
              </Button>
              <div className="menu-art-footer">
                <span>
                  Bom churrasco.
                  <br />
                  Bons momentos.
                </span>
                <small>
                  ZAGUOBINSKI
                  <br />
                  EVENTOS
                </small>
              </div>
            </div>
            <div className="menu-info">
              <p className="eyebrow">{m.tag}</p>
              <h3>{m.name.toUpperCase()}</h3>
              <p className="menu-description">{m.description}</p>
              <p className="list-title">NA BRASA</p>
              <ul className="meat-list">
                {m.meats.map((meat) => (
                  <li key={meat}>
                    <Check size={13} />
                    {meat}
                  </li>
                ))}
              </ul>
              <div className="included-line">
                Entradas, acompanhamentos, uma opção de massa e sobremesa.
              </div>
              <a className="button" href={`${BASE}/cardapios/${m.slug}/`}>
                Conhecer o cardápio completo <ArrowUpRight size={17} />
              </a>
              <p className="menu-price">Valor por pessoa sob consulta.</p>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <p className="menu-disclaimer">
        Equipe de churrasqueiros, cozinha, buffet e reposição inclusos. Pratos e
        talheres não são fornecidos; locação à parte, sob consulta.
      </p>
      <Dialog open={art} onOpenChange={setArt}>
        <DialogContent className="art-dialog">
          <DialogTitle>Cardápio {menu.name}</DialogTitle>
          <DialogDescription>
            Material original fornecido pela Zaguobinski Eventos.
          </DialogDescription>
          <img
            src={`${BASE}/cardapios/${menu.slug}.jpeg`}
            alt={`Cardápio completo ${menu.name}`}
          />
          <a
            className="text-link"
            href={`${BASE}/cardapios/${menu.slug}.jpeg`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir imagem em tamanho original <ArrowUpRight size={15} />
          </a>
        </DialogContent>
      </Dialog>
    </section>
  );
}
