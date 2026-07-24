import { useTranslations } from "next-intl";

const BG = ["#FF66C4", "#F7EFE5", "#4A382F"];
const COLOR = ["#FFFFFF", "#2A1D18", "#F7EFE5"];

export default function Abordagem() {
  const t = useTranslations("Abordagem");
  const services = t.raw("services") as { index: string; title: string; desc: string }[];

  return (
    <section id="abordagem" className="abordagem">
      <div className="abordagem-inner">
        <div className="abordagem-head">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2 className="title">{t("title")}</h2>
        </div>
        <div className="abordagem-grid">
          {services.map((s, i) => (
            <div key={s.index} className="abordagem-card" style={{ background: BG[i], color: COLOR[i] }}>
              <span className="index">{s.index}</span>
              <h3 className="title">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
