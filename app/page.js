"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const site = {
  "brandName": "Rota do Sol",
  "audience": "Moradores de Itati e viajantes da RS-101 e da Rota do Sol que procuram uma parada honesta para comer bem, tomar café e provar pastéis quentes durante o dia.",
  "pageJob": "Apresentar o restaurante e pastelaria como parada de referência na estrada, mostrar horários e localização com clareza e converter a visita em contato direto por telefone ou Instagram.",
  "eyebrow": "Restaurante e pastelaria em Itati",
  "heroTitle": "A parada quente da Rota do Sol",
  "heroText": "Comida de todo dia, café na hora e pastel fritando na chapa em Itati. Um ponto de apoio para quem mora na cidade e para quem está de passagem pela serra.",
  "primaryCta": "Ligar agora",
  "secondaryCta": "Ver no Instagram",
  "aboutTitle": "Cozinha de estrada, feita para o dia inteiro",
  "aboutText": "O Rota do Sol serve gente de Itati desde cedo, com o balcão aberto das 7h30 às 17h. Do café da manhã ao almoço, a proposta é simples: prato honesto, atendimento próximo e pastel na hora. É a parada natural para quem cruza a região e quer comer bem sem sair da rota.",
  "servicesTitle": "O que sai da cozinha",
  "servicesIntro": "Um cardápio direto, pensado para o ritmo de quem trabalha na cidade e de quem viaja pela serra.",
  "services": [
    {
      "title": "Restaurante",
      "description": "Pratos do dia servidos no almoço, com o sabor de comida caseira e porção que sustenta a jornada."
    },
    {
      "title": "Pastelaria",
      "description": "Pastéis fritos na hora, crocantes e recheados na medida. A especialidade que dá nome à casa."
    },
    {
      "title": "Café e lanches",
      "description": "Café fresco, salgados e lanches para começar o dia ou fazer a pausa certa no meio da estrada."
    }
  ],
  "proofTitle": "Quem para, volta",
  "proofText": "Nota 4,4 com mais de 760 avaliações de clientes no Google. A reputação foi construída na chapa, prato após prato, por quem mora em Itati e por quem passa pela Rota do Sol.",
  "contactTitle": "Encontre a Rota do Sol",
  "contactText": "Estamos em Itati, RS, CEP 95538-000. Abrimos de quinta a terça, das 7h30 às 17h, fechados às quartas. Ligue para (51) 98205-7579 ou acompanhe o dia a dia da cozinha no Instagram.",
  "seoTitle": "Rota do Sol | Restaurante e Pastelaria em Itati, RS",
  "seoDescription": "Restaurante e pastelaria em Itati, RS. Pratos do dia, café fresco e pastel na hora, das 7h30 às 17h. Nota 4,4 no Google. Ligue (51) 98205-7579.",
  "design": {
    "direction": "editorial",
    "heroLayout": "asymmetric",
    "fontPair": "humanist",
    "motion": "standard",
    "radius": "soft",
    "signatureLabel": "Sol de Itati",
    "colors": {
      "primary": "#B4381C",
      "accent": "#E8A33D",
      "background": "#FBF4E9",
      "surface": "#F4E7D2",
      "text": "#2A1A12",
      "muted": "#7A6552"
    }
  },
  "segment": "Restaurante",
  "city": "Itati",
  "address": "Itati - RS, 95538-000",
  "phone": "(51) 98205-7579",
  "whatsapp": "5551982057579",
  "rating": "4,4",
  "reviews": "764",
  "mapsLink": "https://maps.google.com/?cid=14472877057248332678&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  "existingWebsite": "",
  "hours": [
    "segunda-feira: 07:30 – 17:00",
    "terça-feira: 07:30 – 17:00",
    "quarta-feira: Fechado",
    "quinta-feira: 07:30 – 17:00",
    "sexta-feira: 07:30 – 17:00",
    "sábado: 07:30 – 17:00",
    "domingo: 07:30 – 17:00"
  ],
  "images": [
    "/images/google-place-1.jpg",
    "/images/google-place-2.jpg",
    "/images/google-place-3.png",
    "/images/google-place-4.jpg",
    "/images/google-place-5.jpg",
    "/images/reference-1.jpg",
    "/images/reference-2.jpg",
    "/images/reference-3.jpg"
  ],
  "attributions": [
    {
      "name": "Restaurante e Pastelaria Rota do Sol",
      "uri": "https://maps.google.com/maps/contrib/101512118707341859568"
    },
    {
      "name": "Pelego Mercearia",
      "uri": "https://maps.google.com/maps/contrib/105472981133866878775"
    },
    {
      "name": "Cleci Cioatto",
      "uri": "https://maps.google.com/maps/contrib/112680034112864020428"
    }
  ],
  "effects": [
    "entrance-motion",
    "section-reveal",
    "hover-lift",
    "parallax-hero",
    "glass-header",
    "ambient-glow",
    "smooth-scroll",
    "cta-pulse"
  ],
  "skillMode": "auto",
  "skills": [
    "creative-web-director",
    "brand-system-architect",
    "seo-content-engine",
    "conversion-director",
    "organizacao-padrao-saulo"
  ]
};

function Icon({ name }) {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.92Z"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    spark: <><path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name] || paths.check}</svg>;
}

function ActionLink({ href, children, className = "", icon = "arrow" }) {
  if (!href) return null;
  const external = href.startsWith("http");
  return <a className={className} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}><span>{children}</span><Icon name={icon}/></a>;
}

export default function Home() {
  const rootRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const phoneHref = site.phone ? "tel:" + site.phone.replace(/[^+\d]/g, "") : "";
  const whatsappHref = site.whatsapp ? "https://wa.me/" + site.whatsapp : "";
  const primaryHref = whatsappHref || phoneHref || site.mapsLink || "#contato";
  const motionDistance = site.design.motion === "expressive" ? 40 : site.design.motion === "subtle" ? 14 : 26;
  const effects = new Set(Array.isArray(site.effects) ? site.effects : []);
  const hasEffect = name => effects.has(name);
  const effectKey = Array.from(effects).sort().join(" ");

  useEffect(() => {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = hasEffect("smooth-scroll") ? "smooth" : "";
    if (reducedMotion || !rootRef.current || (!hasEffect("section-reveal") && !hasEffect("parallax-hero"))) {
      return () => { document.documentElement.style.scrollBehavior = previousScrollBehavior; };
    }
    let context;
    let active = true;
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, triggerModule]) => {
      if (!active || !rootRef.current) return;
      const gsap = gsapModule.gsap;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      context = gsap.context(() => {
        if (hasEffect("section-reveal")) {
          gsap.utils.toArray("[data-reveal]").forEach(element => {
            gsap.fromTo(element, { y: motionDistance, opacity: 0 }, { y: 0, opacity: 1, duration: site.design.motion === "subtle" ? 0.55 : 0.85, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 84%", once: true } });
          });
        }
        if (hasEffect("parallax-hero")) {
          gsap.utils.toArray("[data-parallax]").forEach(element => {
            gsap.to(element, { yPercent: -8, ease: "none", scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: 0.8 } });
          });
        }
      }, rootRef);
    });
    return () => {
      active = false;
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
      if (context) context.revert();
    };
  }, [reducedMotion, motionDistance, effectKey]);

  const heroInitial = reducedMotion || !hasEffect("entrance-motion") ? false : { opacity: 0, y: motionDistance };
  const heroTransition = { duration: site.design.motion === "subtle" ? 0.45 : 0.8, ease: [0.22, 1, 0.36, 1] };

  return <main ref={rootRef} data-direction={site.design.direction} data-layout={site.design.heroLayout} data-radius={site.design.radius} data-motion={site.design.motion} data-effects={effectKey}>
    <header className="siteHeader"><a className="brand" href="#top" aria-label={"Ir ao início de " + site.brandName}>{site.brandName}</a><nav aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#servicos">Diferenciais</a><a href="#contato">Contato</a></nav><ActionLink href={primaryHref} className="headerCta">{site.primaryCta}</ActionLink></header>

    <section className="hero" id="top"><div className="heroAtmosphere" aria-hidden="true"/>
      <motion.div className="heroCopy" initial={heroInitial} animate={{ opacity: 1, y: 0 }} transition={heroTransition}><span className="eyebrow"><Icon name="spark"/>{site.eyebrow}</span><h1>{site.heroTitle}</h1><p>{site.heroText}</p><div className="heroActions"><ActionLink href={primaryHref} className="primary">{site.primaryCta}</ActionLink>{site.mapsLink && <ActionLink href={site.mapsLink} className="secondary" icon="pin">{site.secondaryCta}</ActionLink>}</div><div className="trustLine" aria-label="Informações de confiança">{site.rating && <div><strong>{site.rating}</strong><span>avaliação no Google</span></div>}{site.reviews && <div><strong>{site.reviews}</strong><span>avaliações registradas</span></div>}{site.city && <div><strong>{site.city}</strong><span>atendimento local</span></div>}</div></motion.div>
      <motion.div className="heroVisual" initial={reducedMotion || !hasEffect("entrance-motion") ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...heroTransition, delay: 0.14 }}><div className="signatureRail"><span>{site.design.signatureLabel}</span></div><div className="heroImage" data-parallax>{site.images[0] ? <img src={site.images[0]} alt={"Ambiente ou apresentação de " + site.brandName}/> : <div className="mediaFallback"><span>{site.brandName.slice(0, 1)}</span><small>{site.segment || "Negócio local"}</small></div>}</div><div className="heroNote"><span>Prévia estratégica</span><strong>{site.pageJob}</strong></div>{site.images[1] && <div className="heroImageSecondary"><img src={site.images[1]} alt={"Detalhe de " + site.brandName}/></div>}</motion.div>
    </section>

    <section className="statement" id="sobre" data-reveal><div><span className="sectionLabel">Direção</span><h2>{site.aboutTitle}</h2></div><div className="statementBody"><p>{site.aboutText}</p><span className="audience">Criado para: {site.audience}</span></div></section>

    <section className="services" id="servicos"><div className="sectionHead" data-reveal><div><span className="sectionLabel">Experiência</span><h2>{site.servicesTitle}</h2></div><p>{site.servicesIntro}</p></div><div className="serviceComposition">{site.services.map((service, index) => <article className={"serviceCard serviceCard-" + index} key={service.title} data-reveal><span className="serviceMarker" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div className="serviceIcon"><Icon name={index === 0 ? "spark" : "check"}/></div><h3>{service.title}</h3><p>{service.description}</p></article>)}</div></section>

    {site.images.length > 2 && <section className="gallery" aria-label={"Galeria de " + site.brandName}>{site.images.slice(2, 5).map((image, index) => <figure key={image} data-reveal><img src={image} alt={"Imagem " + (index + 1) + " de " + site.brandName}/></figure>)}</section>}

    <section className="proof" data-reveal><div className="proofCopy"><span className="sectionLabel">Confiança</span><h2>{site.proofTitle}</h2><p>{site.proofText}</p></div><div className="proofPanel">{site.address && <div><Icon name="pin"/><span><small>Endereço</small><strong>{site.address}</strong></span></div>}{site.hours.length > 0 && <div><Icon name="clock"/><span><small>Horários informados</small><strong>{site.hours.slice(0, 2).join(" · ")}</strong></span></div>}{site.phone && <div><Icon name="phone"/><span><small>Contato</small><strong>{site.phone}</strong></span></div>}</div></section>

    <section className="contact" id="contato" data-reveal><div><span className="sectionLabel">Próximo passo</span><h2>{site.contactTitle}</h2><p>{site.contactText}</p></div><div className="contactActions"><ActionLink href={primaryHref} className="contactPrimary">{site.primaryCta}</ActionLink>{site.mapsLink && <ActionLink href={site.mapsLink} className="contactSecondary" icon="pin">Abrir no Google Maps</ActionLink>}</div></section>

    <footer><div><strong>{site.brandName}</strong><span>{site.segment}{site.city ? " · " + site.city : ""}</span></div><p>Prévia desenvolvida por Saulo Pavanello</p></footer>
    {site.attributions.length > 0 && <div className="attributions">Fotos: {site.attributions.map((item, index) => <span key={item.name}>{index > 0 ? " · " : ""}{item.uri ? <a href={item.uri} target="_blank" rel="noreferrer">{item.name}</a> : item.name}</span>)}</div>}
    {whatsappHref && <motion.a className="floatingWhatsapp" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp" whileHover={reducedMotion ? undefined : { y: -3 }} whileTap={reducedMotion ? undefined : { scale: 0.96 }}><Icon name="phone"/><span>WhatsApp</span></motion.a>}
  </main>;
}
