const TESTIMONIALS = [
  { quote: "Depois das sessões, aprendi a não brigar comigo mesma todo dia.", name: "Ana P." },
  { quote: "Pela primeira vez sinto que entendo minha ansiedade, em vez de fugir dela.", name: "Carla M." },
  { quote: "A Mika me ajudou a trocar autocrítica por autocompaixão de verdade.", name: "Beatriz R." },
  { quote: "Terapia leve, sem julgamento e sem enrolação. Recomendo de olhos fechados.", name: "Júlia T." },
  { quote: "Encontrei ferramentas reais pra lidar com os dias difíceis.", name: "Fernanda L." },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="depoimentos">
      <div className="depoimentos-head">
        <span className="eyebrow">Quem já passou por aqui</span>
        <h2 className="title">Depoimentos que aquecem o coração</h2>
      </div>
      <div className="depoimentos-track">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="depoimento-card">
            <span className="depoimento-quote-mark">&quot;</span>
            <p className="depoimento-text">{t.quote}</p>
            <span className="depoimento-name">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
