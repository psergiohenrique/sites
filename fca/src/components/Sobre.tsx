export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/fca-service-luggage.webp" alt="Cuidado com a bagagem" />
      </div>
      <div>
        <p className="eyebrow">Sobre a FCA</p>
        <h2>Excelência que começa antes da viagem.</h2>
        <p>
          A FCA nasceu para atender quem trata pontualidade e discrição como
          parte do trabalho. Motoristas treinados, veículos revisados e um
          atendimento que acompanha cada etapa do trajeto — da confirmação ao
          desembarque.
        </p>
        <p>
          Além do transporte executivo, a FCA também atua como corretora de
          seguros — cuidando da proteção do seu patrimônio com a mesma
          atenção que dedicamos à sua viagem.
        </p>
        <div className="sobre-stats">
          <div>
            <div className="value">100%</div>
            <div className="label">Pontualidade</div>
          </div>
          <div>
            <div className="value">Sigilo</div>
            <div className="label">E discrição</div>
          </div>
          <div>
            <div className="value">Frota</div>
            <div className="label">Revisada</div>
          </div>
        </div>
      </div>
    </section>
  );
}
