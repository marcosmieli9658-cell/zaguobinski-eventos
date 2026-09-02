'use client';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { ArrowUpRight, Check, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { menus, whatsapp } from '@/lib/menus';

const subscribeToHydration = () => () => {};
const clientReady = () => true;
const serverReady = () => false;

export default function QuoteForm() {
  // Prevent a native GET submission before the local-only form has hydrated.
  const interactive = useSyncExternalStore(
    subscribeToHydration,
    clientReady,
    serverReady,
  );
  const [ready, setReady] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const confirmation = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ready) confirmation.current?.focus();
  }, [ready]);
  function prepare(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => {
      const item = data.get(key);
      return typeof item === 'string' ? item.trim() : '';
    };
    const name = value('name');
    const city = value('city');
    const guests = Number(value('guests'));
    const date = value('date');
    const picked = value('menu') || 'Ainda quero uma indicação';
    const type = value('event');
    if (!name || !city || !Number.isInteger(guests) || guests < 1) {
      setError(
        'Informe seu nome, cidade e uma quantidade válida de convidados.',
      );
      return;
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date && new Date(date + 'T00:00:00') < today) {
      setError(
        'Escolha uma data de hoje em diante, ou deixe a data em aberto.',
      );
      return;
    }
    const text = `Olá, Zaguobinski! Quero planejar meu evento.\n\nNome: ${name}\nEvento: ${type}\nCidade: ${city}\nConvidados: ${guests}\nData: ${date ? date.split('-').reverse().join('/') : 'A definir'}\nCardápio: ${picked}\n\nPodem me informar a disponibilidade e preparar um orçamento?`;
    setError('');
    setMessage(text);
    setReady(whatsapp(text));
  }
  return (
    <section className="section quote-section" id="contato">
      <div className="quote-copy">
        <p className="eyebrow">VAMOS TIRAR SEU EVENTO DO PAPEL?</p>
        <h2>
          A PRÓXIMA
          <br />
          BOA HISTÓRIA
          <br />
          <em>PODE SER A SUA.</em>
        </h2>
        <p>
          Conte um pouco do que você está imaginando. Nossa equipe ajuda a
          encontrar o cardápio e a estrutura para o seu momento.
        </p>
        <a
          className="direct-contact"
          href={whatsapp('Olá! Quero conversar sobre um evento.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={22} />
          <span>
            Prefere falar direto?<strong>(41) 99629-2306</strong>
          </span>
          <ArrowUpRight size={18} />
        </a>
        <p className="contact-secondary">
          Outro contato:{' '}
          <a
            href="https://wa.me/5547996710409"
            target="_blank"
            rel="noopener noreferrer"
          >
            (47) 99671-0409
          </a>
        </p>
      </div>
      <form
        onSubmit={prepare}
        className="quote-form"
        onChange={() => {
          setReady('');
          setError('');
        }}
      >
        <p className="form-title">
          Todo grande momento começa com uma conversa.
        </p>
        <div className="form-grid">
          <div className="field wide">
            <Label htmlFor="name">Como podemos chamar você? *</Label>
            <Input
              id="name"
              name="name"
              placeholder="Seu nome"
              autoComplete="given-name"
              maxLength={80}
              required
            />
          </div>
          <div className="field">
            <Label htmlFor="event">Qual é a ocasião? *</Label>
            <select id="event" name="event" required defaultValue="">
              <option value="" disabled>
                Selecione
              </option>
              <option>Casamento</option>
              <option>Aniversário</option>
              <option>Confraternização</option>
              <option>Evento corporativo</option>
              <option>Evento de igreja</option>
              <option>Outra celebração</option>
            </select>
          </div>
          <div className="field">
            <Label htmlFor="guests">Quantas pessoas? *</Label>
            <Input
              id="guests"
              name="guests"
              type="number"
              inputMode="numeric"
              min="1"
              step="1"
              placeholder="Número de convidados"
              required
            />
          </div>
          <div className="field">
            <Label htmlFor="date">Data do evento</Label>
            <Input
              id="date"
              name="date"
              type="date"
              aria-describedby="date-hint"
            />
            <small id="date-hint" className="field-hint">
              Ainda sem data? Deixe em branco.
            </small>
          </div>
          <div className="field">
            <Label htmlFor="city">Em qual cidade? *</Label>
            <Input
              id="city"
              name="city"
              autoComplete="address-level2"
              placeholder="Cidade / UF"
              maxLength={100}
              required
            />
          </div>
          <div className="field wide">
            <Label htmlFor="menu">Qual cardápio despertou seu apetite?</Label>
            <select
              id="menu"
              name="menu"
              defaultValue="Ainda quero uma indicação"
            >
              <option>Ainda quero uma indicação</option>
              {menus.map((m) => (
                <option key={m.slug}>{m.name}</option>
              ))}
            </select>
          </div>
        </div>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        {ready ? (
          <div
            className="quote-ready"
            ref={confirmation}
            tabIndex={-1}
            aria-label="Pedido pronto para conferir"
          >
            <p>
              <Check size={16} /> Seu pedido está pronto para enviar.
            </p>
            <details>
              <summary>Conferir minha mensagem</summary>
              <pre>{message}</pre>
            </details>
            <a
              className="button"
              href={ready}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir WhatsApp e enviar <ArrowUpRight size={18} />
            </a>
            <small>Nenhuma mensagem foi enviada ainda.</small>
          </div>
        ) : (
          <Button
            type="submit"
            className="button form-submit"
            disabled={!interactive}
          >
            Preparar meu pedido de orçamento <ArrowUpRight size={19} />
          </Button>
        )}
        <noscript>
          <p className="field-hint">
            Para preparar a mensagem aqui, ative o JavaScript. Você também pode
            usar o contato direto pelo WhatsApp.
          </p>
        </noscript>
        <p className="form-privacy">
          Os dados ficam nesta página até você abrir o WhatsApp. Sem cadastro e
          sem reserva automática. Disponibilidade, atendimento e valores são
          confirmados pela equipe.
        </p>
      </form>
    </section>
  );
}
