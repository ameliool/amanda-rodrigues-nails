'use client';

import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import {
  ArrowRight,
  Camera,
  ChevronDown,
  Clock,
  Droplets,
  Heart,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const whatsappUrl = 'https://wa.me/message/6PW4QLZP3D35I1';
const instagramUrl = 'https://www.instagram.com/amanda_nailsdesigner/';

const navItems = [
  ['Início', '#inicio'],
  ['Portfólio', '#portfolio'],
  ['Serviços', '#servicos'],
  ['Valores', '#valores'],
  ['Sobre', '#sobre'],
  ['Avaliações', '#avaliacoes'],
];

const portfolio = [
  {
    image: '/images/portfolio/01-francesinha-branca.jpg',
    label: 'Francesinha branca',
    alt: 'Unhas quadradas com francesinha branca e base natural',
    url: 'https://www.instagram.com/amanda_nailsdesigner/p/Dcq6I_nkT7_/',
    position: '50% 64%',
  },
  {
    image: '/images/portfolio/02-preto-stiletto.jpg',
    label: 'Preto stiletto',
    alt: 'Unhas longas em formato stiletto com esmaltação preta',
    url: 'https://www.instagram.com/amanda_nailsdesigner/reel/Dci-GhdRHO6/',
    position: '50% 50%',
  },
  {
    image: '/images/portfolio/03-nail-art-azul.jpg',
    label: 'Nail art azul',
    alt: 'Unhas amendoadas com base nude, pontas brancas e desenho azul',
    url: 'https://www.instagram.com/amanda_nailsdesigner/p/DbvWyulkaIS/',
    position: '50% 52%',
  },
  {
    image: '/images/portfolio/04-perolada-dourada.jpg',
    label: 'Detalhes dourados',
    alt: 'Unhas longas em tons claros com detalhes dourados',
    url: 'https://www.instagram.com/amanda_nailsdesigner/p/DZ5VZGfkakF/',
    position: '50% 52%',
  },
  {
    image: '/images/portfolio/05-francesinha-amendoada.jpg',
    label: 'Francesinha amendoada',
    alt: 'Unhas amendoadas com base nude e francesinha branca',
    url: 'https://www.instagram.com/amanda_nailsdesigner/p/DZZ5MdIESao/',
    position: '50% 52%',
  },
  {
    image: '/images/portfolio/06-vermelho-classico.jpg',
    label: 'Vermelho clássico',
    alt: 'Unhas amendoadas com esmaltação vermelha de alto brilho',
    url: 'https://www.instagram.com/amanda_nailsdesigner/p/DVvkKtqDUdZ/',
    position: '50% 52%',
  },
];

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: 'Molde F1',
    description: 'Alongamento estruturado com acabamento natural.',
    icon: Sparkles,
  },
  {
    title: 'Manutenção',
    description: 'Correção do crescimento e renovação do acabamento.',
    icon: RefreshCw,
  },
  {
    title: 'Banho de gel',
    description: 'Reforço da unha natural com uma camada de gel.',
    icon: Droplets,
  },
  {
    title: 'Esmaltação em gel',
    description: 'Cor intensa, brilho e maior durabilidade.',
    icon: Palette,
  },
  {
    title: 'Nail art',
    description: 'Criações personalizadas conforme a referência escolhida.',
    icon: Star,
  },
  {
    title: 'Remoção segura',
    description: 'Retirada cuidadosa do produto anterior.',
    icon: ShieldCheck,
  },
];

type PriceGroup = {
  title: string;
  items: Array<{ name: string; price: string; detail?: string }>;
  note?: string;
};

const priceGroups: PriceGroup[] = [
  {
    title: 'Mãos',
    items: [
      { name: 'Alongamento', price: 'R$ 150' },
      { name: 'Manutenção', price: 'R$ 110' },
      { name: 'Alongamento grande', price: 'R$ 160' },
      { name: 'Manutenção', price: 'R$ 120' },
      { name: 'Alongamento extra grande', price: 'R$ 170' },
      { name: 'Manutenção', price: 'R$ 130' },
      { name: 'Banho em gel', price: 'R$ 120' },
      { name: 'Manutenção', price: 'R$ 90' },
      { name: 'Reposição de unha quebrada', price: 'R$ 10' },
      { name: 'Remoção', price: 'R$ 30' },
    ],
    note: 'Nos alongamentos estão inclusos: cutilagem russa, decoração encapsulada, traços e decoração simples.',
  },
  {
    title: 'Nail Art',
    items: [
      { name: 'Nail art básica', detail: 'o par', price: 'R$ 5 a R$ 20' },
      { name: 'Nail art elaborada', detail: 'o par', price: 'R$ 20 a R$ 35' },
    ],
    note: 'O valor da nail art pode variar de acordo com a complexidade do desenho.',
  },
  {
    title: 'Pés',
    items: [
      { name: 'Pedicure', detail: 'Incluso esmaltação e cutilagem', price: 'R$ 80' },
      { name: 'Remoção', price: 'R$ 30' },
      { name: 'Reconstrução', detail: 'o par', price: 'R$ 20' },
      { name: 'Francesa reversa', price: '+ R$ 10' },
    ],
  },
];

const reviews = [
  {
    quote: 'A melhooooor 🔥',
    name: '@_flaviasaraujo',
    initial: 'F',
    source: 'Comentário no Instagram',
    url: 'https://www.instagram.com/p/Dcq6I_nkT7_/c/17965874637175144/',
  },
  {
    quote: 'Perfeito 🤍',
    name: '@eu.isaabelle',
    initial: 'I',
    source: 'Comentário no Instagram',
    url: 'https://www.instagram.com/p/Dcq6I_nkT7_/c/17910086568462286/',
  },
  {
    quote: 'Ameiiiii',
    name: '@vii.toriav',
    initial: 'V',
    source: 'Comentário no Instagram',
    url: 'https://www.instagram.com/p/DaGgYq2H1cp/c/18046203017575757/',
  },
];

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Amanda Nails Designer, início">
      <Heart aria-hidden="true" />
      <span className="brand-copy">
        <strong>Amanda</strong>
        <em>Nails Designer</em>
      </span>
    </a>
  );
}

function MainNav({ className = '', onNavigate }: { className?: string; onNavigate?: () => void }) {
  return (
    <nav className={className} aria-label="Navegação principal">
      {navItems.map(([label, href]) => (
        <a href={href} key={href} onClick={onNavigate}>
          {label}
        </a>
      ))}
    </nav>
  );
}

function WhatsAppLink({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <a className={className} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <MessageCircle aria-hidden="true" />
      <span>{children}</span>
      <ArrowRight className="link-arrow" aria-hidden="true" />
    </a>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function PortfolioCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function updateActiveCard() {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.querySelectorAll<HTMLElement>('.portfolio-card'));
    const firstOffset = cards[0]?.offsetLeft ?? 0;
    const nextIndex = cards.reduce((closest, card, index) => {
      const distance = Math.abs(card.offsetLeft - firstOffset - track.scrollLeft);
      const closestDistance = Math.abs(cards[closest].offsetLeft - firstOffset - track.scrollLeft);
      return distance < closestDistance ? index : closest;
    }, 0);

    setActiveIndex(nextIndex);
  }

  function goToCard(index: number) {
    const track = trackRef.current;
    const cards = track ? Array.from(track.querySelectorAll<HTMLElement>('.portfolio-card')) : [];
    const firstOffset = cards[0]?.offsetLeft ?? 0;
    const card = cards[index];
    if (!track || !card) return;

    track.scrollTo({ left: card.offsetLeft - firstOffset, behavior: 'smooth' });
    setActiveIndex(index);
  }

  return (
    <>
      <div className="portfolio-track" id="portfolio-track" ref={trackRef} onScroll={updateActiveCard}>
        {portfolio.map((item) => (
          <a
            className="portfolio-card"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            key={item.image}
          >
            <span className="portfolio-image-wrap">
              <img
                src={item.image}
                alt={item.alt}
                width="480"
                height="640"
                loading="lazy"
                draggable="false"
                style={{ objectPosition: item.position }}
              />
            </span>
            <span className="portfolio-label">{item.label}</span>
          </a>
        ))}
      </div>

      <div className="slider-dots" aria-label="Navegar pelos trabalhos">
        {portfolio.map((item, index) => (
          <button
            type="button"
            className={index === activeIndex ? 'active' : ''}
            aria-label={`Ver ${item.label}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            aria-controls="portfolio-track"
            onClick={() => goToCard(index)}
            key={item.image}
          />
        ))}
      </div>
    </>
  );
}

export default function Home() {
  const [showAllPrices, setShowAllPrices] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const priceGroupsRef = useRef<HTMLDivElement>(null);
  const priceAnimationRef = useRef<Animation | null>(null);

  function togglePrices() {
    const groups = priceGroupsRef.current;

    if (!groups || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShowAllPrices((current) => !current);
      return;
    }

    const startHeight = groups.getBoundingClientRect().height;
    const previousOverflow = groups.style.overflow;

    priceAnimationRef.current?.cancel();
    groups.style.height = `${startHeight}px`;
    groups.style.overflow = 'clip';

    flushSync(() => setShowAllPrices((current) => !current));

    groups.style.height = 'auto';
    const endHeight = groups.getBoundingClientRect().height;
    groups.style.height = `${startHeight}px`;

    const animation = groups.animate(
      [
        { height: `${startHeight}px`, opacity: 0.92 },
        { height: `${endHeight}px`, opacity: 1 },
      ],
      {
        duration: 650,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        fill: 'forwards',
      },
    );

    priceAnimationRef.current = animation;
    animation.finished
      .catch(() => undefined)
      .finally(() => {
        if (priceAnimationRef.current !== animation) return;
        groups.style.height = '';
        groups.style.overflow = previousOverflow;
        priceAnimationRef.current = null;
        animation.cancel();
      });
  }

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <MainNav className="desktop-nav" />
          <WhatsAppLink className="header-cta">Agendar agora</WhatsAppLink>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger
              render={<button className="mobile-menu-trigger" type="button" aria-label="Abrir menu" />}
            >
              <Menu aria-hidden="true" />
            </SheetTrigger>
            <SheetContent className="mobile-menu-panel" side="right" showCloseButton={false}>
              <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
              <div className="mobile-menu-heading">
                <Brand />
                <button type="button" aria-label="Fechar menu" onClick={() => setMobileMenuOpen(false)}>
                  <X aria-hidden="true" />
                </button>
              </div>
              <MainNav className="mobile-nav" onNavigate={() => setMobileMenuOpen(false)} />
              <WhatsAppLink className="mobile-menu-cta">Agendar pelo WhatsApp</WhatsAppLink>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="/images/portfolio-feature.png"
            alt="Mãos com unhas amendoadas em tom nude e detalhes dourados"
            width="1536"
            height="1024"
            fetchPriority="high"
          />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content">
            <h1 id="hero-title">
              <span>Unhas impecáveis</span>
              <span>
                para realçar <em>sua beleza</em>
              </span>
            </h1>
            <p>
              Alongamentos e nail art com acabamento cuidadoso,
              <br />
              feitos para valorizar o seu estilo.
            </p>
            <div className="hero-actions">
              <WhatsAppLink className="primary-button">Agendar pelo WhatsApp</WhatsAppLink>
              <a className="outline-button" href="#portfolio">
                <span className="button-icon-spacer" aria-hidden="true" />
                <span>Ver portfólio</span>
                <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>

        </section>

        <section className="portfolio-section" id="portfolio" aria-labelledby="portfolio-title">
          <div className="portfolio-heading-row">
            <div aria-hidden="true" />
            <div className="section-heading">
              <p>Portfólio</p>
              <h2 id="portfolio-title">Trabalhos recentes</h2>
            </div>
            <a className="instagram-text-link" href={instagramUrl} target="_blank" rel="noopener noreferrer">
              Ver no Instagram
              <ArrowRight aria-hidden="true" />
            </a>
          </div>

          <PortfolioCarousel />
        </section>

        <section className="services-section" id="servicos" aria-labelledby="services-title">
          <SectionHeading eyebrow="Cuidado em cada detalhe" title="Serviços" />
          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.title}>
                  <span className="service-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="prices-section" id="valores" aria-labelledby="prices-title">
          <SectionHeading eyebrow="Investimento em você" title="Valores" />
          <div
            className={`price-groups${showAllPrices ? '' : ' is-collapsed'}`}
            id="price-groups"
            ref={priceGroupsRef}
          >
            {priceGroups.map((group, groupIndex) => {
              const itemsBeforeGroup = priceGroups
                .slice(0, groupIndex)
                .reduce((total, currentGroup) => total + currentGroup.items.length, 0);
              const visibleItems = showAllPrices
                ? group.items
                : group.items.slice(0, Math.max(0, 4 - itemsBeforeGroup));

              if (visibleItems.length === 0) return null;

              return (
                <article className="price-list-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="price-list">
                    {visibleItems.map((item, index) => (
                      <div className="price-row" key={`${group.title}-${item.name}-${index}`}>
                        <span className="price-name">
                          <strong>{item.name}</strong>
                          {item.detail && <small>{item.detail}</small>}
                        </span>
                        <strong className="price-amount">{item.price}</strong>
                      </div>
                    ))}
                  </div>
                  {showAllPrices && group.note && (
                    <p className="price-note">
                      <Sparkles aria-hidden="true" />
                      <span>{group.note}</span>
                    </p>
                  )}
                </article>
              );
            })}
          </div>
          <button
            className={`prices-toggle${showAllPrices ? ' is-expanded' : ''}`}
            type="button"
            aria-expanded={showAllPrices}
            aria-controls="price-groups"
            onClick={togglePrices}
          >
            <span>{showAllPrices ? 'Mostrar menos' : 'Ver todos os valores'}</span>
            <ChevronDown aria-hidden="true" />
          </button>
        </section>

        <section className="about-section" id="sobre" aria-labelledby="about-title">
          <div className="about-portrait-wrap">
            <img
              src="/images/about-amanda.png"
              alt="Retrato de Amanda Rodrigues"
              width="1024"
              height="1536"
              loading="lazy"
            />
          </div>

          <div className="about-copy">
            <p className="eyebrow">Sobre mim</p>
            <h2 id="about-title">Olá, eu sou a Amanda</h2>
            <p className="about-text">
              Sou nail designer em Mogi das Cruzes e especialista em Molde F1. Meu trabalho une
              técnica, cuidado e atenção aos detalhes para criar unhas que combinam com cada cliente.
              O atendimento acontece com hora marcada no Jardim Universo.
            </p>
            <div className="about-features">
              <span>
                <Heart aria-hidden="true" />
                Cuidado em cada etapa
              </span>
              <span>
                <Sparkles aria-hidden="true" />
                Atendimento personalizado
              </span>
              <span>
                <ShieldCheck aria-hidden="true" />
                Acabamento preciso
              </span>
            </div>
          </div>

          <blockquote className="about-quote">
            <span aria-hidden="true">“</span>
            <p>Cuidado, técnica e personalidade em cada atendimento.</p>
            <cite>Amanda</cite>
          </blockquote>
        </section>

        <section className="reviews-section" id="avaliacoes" aria-labelledby="reviews-title">
          <SectionHeading eyebrow="Comentários reais" title="O que elas dizem" />
          <div className="reviews-grid">
            {reviews.map((review) => (
              <a
                className="review-card"
                href={review.url}
                target="_blank"
                rel="noopener noreferrer"
                key={review.name}
              >
                <span className="review-avatar" aria-hidden="true">
                  {review.initial}
                </span>
                <span className="review-content">
                  <span className="review-stars" aria-hidden="true">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </span>
                  <q>{review.quote}</q>
                  <strong>{review.name}</strong>
                  <small>{review.source}</small>
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contato">
        <div className="footer-contacts">
          <div className="footer-contacts-inner">
            <Brand />
            <div className="contact-item">
              <MapPin aria-hidden="true" />
              <span>
                <strong>Jardim Universo</strong>
                Mogi das Cruzes
              </span>
            </div>
            <div className="contact-item">
              <Clock aria-hidden="true" />
              <span>
                <strong>Atendimento</strong>
                Somente com hora marcada
              </span>
            </div>
            <a className="contact-item" href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <Camera aria-hidden="true" />
              <span>
                <strong>@amanda_nailsdesigner</strong>
                Acompanhe os trabalhos
              </span>
            </a>
          </div>
        </div>

        <div className="footer-legal">
          <span>© 2026 Amanda Nails Designer. Todos os direitos reservados.</span>
          <span>Atendimento em Mogi das Cruzes</span>
        </div>
      </footer>
    </>
  );
}
