import { useTranslations } from "next-intl";

function Track({ words }: { words: string[] }) {
  return (
    <span>
      {words.map((w, i) => (
        <span key={i}>
          {w} <em>✕</em>{" "}
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  const t = useTranslations("Marquee");
  const words = t.raw("words") as string[];

  return (
    <div className="marquee">
      <div className="marquee-track">
        <Track words={words} />
        <Track words={words} />
      </div>
    </div>
  );
}
