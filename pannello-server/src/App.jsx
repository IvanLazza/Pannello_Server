import "./App.css";
import { sistema, servers, avvisi } from "./dati";
import { contaPerStato, cpuMedia, piuLento, trovaServer } from "./calcoli";
import { Intestazione } from "./Intestazione";
import { Riepilogo } from "./Riepilogo";
import { GrigliaServer } from "./GrigliaServer";
import { ServerInEvidenza } from "./ServerInEvidenza";
import { Avvisi } from "./Avvisi";

export default function App() {
  const onlineCount = servers.filter((s) => s.online).length;
  const okCount = contaPerStato(servers, "ok");
  const attenzioneCount = contaPerStato(servers, "attenzione");
  const criticiCount = contaPerStato(servers, "critico");
  const offlineCount = contaPerStato(servers, "offline");
  const media = cpuMedia(servers);
  const lento = piuLento(servers);

  const nomeEvidenza = "db-01";
  const serverEvidenza = trovaServer(servers, nomeEvidenza);

  return (
    <div className="pannello">
      <Intestazione
        nome={sistema.nome}
        aggiornato={sistema.aggiornato}
        online={onlineCount}
        totale={servers.length}
      />
      <Riepilogo
        ok={okCount}
        attenzione={attenzioneCount}
        critici={criticiCount}
        offline={offlineCount}
        mediaCpu={media}
        lento={lento}
      />
      <GrigliaServer servers={servers} />
      <ServerInEvidenza nomeCercato={nomeEvidenza} server={serverEvidenza} />
      <Avvisi avvisi={avvisi} />
    </div>
  );
}