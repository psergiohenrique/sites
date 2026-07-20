const WORDS = ["Ansiedade", "Autoestima", "Depressão", "Relacionamentos", "Autoconhecimento"];

function Track() {
  return (
    <span>
      {WORDS.map((w, i) => (
        <span key={i}>
          {w} <em>✕</em>{" "}
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <Track />
        <Track />
      </div>
    </div>
  );
}
