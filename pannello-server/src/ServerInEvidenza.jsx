import { SchedaServer } from "./schedaServer";

export function ServerInEvidenza({ nomeCercato, server }) {
  return (
    <section className="evidenza">
      <h2>Server in evidenza: {nomeCercato}</h2>
      {server ? (
        <SchedaServer server={server} />
      ) : (
        <p className="non-trovato">Nessun server trovato con nome "{nomeCercato}".</p>
      )}
    </section>
  );
}