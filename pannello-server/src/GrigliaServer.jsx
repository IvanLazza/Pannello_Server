import { SchedaServer } from "./SchedaServer";

export function GrigliaServer({ servers }) {
  return (
    <section className="griglia">
      {servers.map((server) => (
        <SchedaServer key={server.nome} server={server} />
      ))}
    </section>
  );
}