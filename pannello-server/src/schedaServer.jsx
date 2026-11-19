import { statoServer } from "./calcoli";
import { BadgeStato } from "./BadgeStato"; 

export function SchedaServer({ server }) {
  const { nome, ruolo, sede, ip, cpu, latenza, servizi, manutenzione } = server;
  const stato = statoServer(server);

  const testoCpu = cpu === null ? "—" : `${cpu}%`;
  const testoLatenza = latenza === null ? "—" : `${latenza} ms`;
  const testoServizi = servizi.length === 0 ? "nessuno" : servizi.join(", ");
  const testoManutenzione = manutenzione
    ? `${manutenzione.data}, ${manutenzione.motivo}`
    : "nessuna in programma";

  return (
    <div className={`scheda scheda-${stato}`}>
      <h3>
        {nome} <BadgeStato stato={stato} />
      </h3>
      <p className="ruolo">
        {ruolo} · {sede} · {ip}
      </p>
      <p>CPU: {testoCpu}</p>
      <p>Latenza: {testoLatenza}</p>
      <p>Servizi: {testoServizi}</p>
      <p>Manutenzione: {testoManutenzione}</p>
    </div>
  );
}