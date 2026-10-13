"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

type Slide = { title: string; text: string; image?: string; href?: string };

// TODO: trocar placeholders pelas artes dos banners da Mika (campo `image`)
export default function Banners() {
  const t = useTranslations("Banners");
  const slides = t.raw("slides") as Slide[];
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = (i + slides.length) % slides.length;
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => setActive(Math.round(track.scrollLeft / track.clientWidth));
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => goTo(active + 1), 6000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <section className="banners" aria-roledescription="carousel" aria-label={t("label")}>
      <div className="banners-track" ref={trackRef}>
        {slides.map((s, i) => {
          const content = (
            <>
              {s.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={s.image} alt={s.title} className="banner-img" />
              )}
              {!s.image && (
                <div className="banner-copy">
                  <h3 className="title">{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              )}
            </>
          );
          return (
            <div key={i} className="banner-slide" aria-roledescription="slide" aria-label={`${i + 1} / ${slides.length}`}>
              {s.href ? <a href={s.href}>{content}</a> : content}
            </div>
          );
        })}
      </div>
      <button className="banners-arrow prev" onClick={() => goTo(active - 1)} aria-label={t("prev")}>
        ‹
      </button>
      <button className="banners-arrow next" onClick={() => goTo(active + 1)} aria-label={t("next")}>
        ›
      </button>
      <div className="banners-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={i === active ? "active" : ""}
            onClick={() => goTo(i)}
            aria-label={`${i + 1}`}
            aria-current={i === active}
          />
        ))}
      </div>
    </section>
  );
}
