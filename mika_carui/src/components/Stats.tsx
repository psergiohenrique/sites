import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations("Stats");
  const STATS = [
    { key: "years", ...t.raw("years") },
    { key: "patients", ...t.raw("patients") },
    { key: "recommend", ...t.raw("recommend") },
    { key: "rating", ...t.raw("rating") },
  ] as { key: string; value: string; label: string }[];

  return (
    <section className="stats">
      <div className="stats-grid">
        {STATS.map((s) => (
          <div key={s.key}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
