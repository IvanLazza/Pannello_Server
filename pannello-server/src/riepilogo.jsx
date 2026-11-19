export function Riepilogo({ ok, attenzione, critici, offline, mediaCpu, lento }) {
  const testoMedia = mediaCpu === null ? "—" : `${mediaCpu.toFixed(1)}%`;
  const numeroLento = lento === null ? "—" : `${lento.latenza} ms`;
  const etichettaLento =
    lento === null ? "Più lento: nessuno" : `Più lento: ${lento.nome}`;

  return (
    <section className="riepilogo">
      <div className="casella">
        <span className="numero">{ok}</span>
        <span className="etichetta">OK</span>
      </div>
      <div className="casella">
        <span className="numero">{attenzione}</span>
        <span className="etichetta">Attenzione</span>
      </div>
      <div className="casella">
        <span className="numero">{critici}</span>
        <span className="etichetta">Critici</span>
      </div>
      <div className="casella">
        <span className="numero">{offline}</span>
        <span className="etichetta">Offline</span>
      </div>
      <div className="casella">
        <span className="numero">{testoMedia}</span>
        <span className="etichetta">CPU media (server online)</span>
      </div>
      <div className="casella">
        <span className="numero">{numeroLento}</span>
        <span className="etichetta">{etichettaLento}</span>
      </div>
    </section>
  );
}