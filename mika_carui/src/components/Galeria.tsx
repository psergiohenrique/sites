export default function Galeria() {
  return (
    <section className="galeria">
      <div className="galeria-grid">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/mika-brown-1.jpeg" alt="Mika Carui" className="g-span-2" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/mika-brown-2.jpeg" alt="Mika Carui" className="g-span-1" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/mika-window.jpeg" alt="Mika Carui" className="g-span-1" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/mika-smile.jpeg" alt="Mika Carui" className="g-span-4" />
      </div>
    </section>
  );
}
