const CREDENTIALS = [
  "TCC",
  "TCC-I",
  "Psicoterapia",
  "Psicologia Clínica",
  "Ansiedade",
  "Depressão",
  "Transtornos do Sono",
  "Atendimento Online",
];

export default function Credenciais() {
  return (
    <section className="section">
      <div className="credenciais-inner">
        <span className="eyebrow">Áreas de especialização</span>
        <div className="credenciais-tags">
          {CREDENTIALS.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
