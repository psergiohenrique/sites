const SERVICOS = [
  {
    num: "01",
    title: "Transfer aeroporto",
    description:
      "Chegadas e partidas com monitoramento de voo, sem atrasos e sem estresse.",
  },
  {
    num: "02",
    title: "Executivo corporativo",
    description:
      "Diárias e contratos para agendas cheias — reuniões, visitas e compromissos em sequência.",
  },
  {
    num: "03",
    title: "Eventos e casamentos",
    description:
      "Chegadas marcantes para ocasiões que merecem um carro à altura do momento.",
  },
  {
    num: "04",
    title: "Turismo executivo",
    description:
      "City tours e roteiros sob medida, com motorista à disposição o dia inteiro.",
  },
];

export default function Servicos() {
  return (
    <section className="servicos" id="servicos">
      <div className="section-head">
        <p className="eyebrow">O que oferecemos</p>
        <h2>Serviços</h2>
      </div>
      <div className="servicos-grid">
        {SERVICOS.map((s) => (
          <div className="servico-card" key={s.num}>
            <div className="num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
