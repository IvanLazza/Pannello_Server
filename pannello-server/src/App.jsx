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


/*
Domande sul Blackout:
1. Cosa si vedrebbe nella griglia con 7 o 5 server in dati-blackout.js?
Con 7 server: nella griglia comparirebbero 7 schede (una per ogni server dell'array), 
disposte automaticamente su più righe grazie alla griglia CSS (map() genera un componente per ciascun elemento dell'array).   
Con 5 server: nella griglia comparirebbero 5 schede (una per ciascuno dei 5 server presenti nell'array).   


2. Perché cambiando una riga cambiano sei componenti senza doverli toccare?L'idea centrale della settimana 7 
è il modello dichiarativo unito ai componenti riutilizzabili con props (e flusso unidirezionale):   
L'interfaccia è una funzione dei dati (approccio dichiarativo): non scrivi istruzioni manuali per creare, 
modificare o cancellare nodi sul DOM. Dichiari come deve apparire l'interfaccia a partire dai dati; 
quando cambi la sorgente dati (come dati-blackout.js), React ricalcola l'interfaccia e aggiorna ciò che serve.
Componenti e props: ogni scheda o pezzo d'interfaccia è un componente che riceve i dati tramite le props (in sola lettura) e si limita a rappresentarli.
Cambiando i dati a monte, lo stesso componente disegna automaticamente il nuovo risultato senza dover riscrivere la logica dentro ogni singolo componente.



Domande sul flusso dei dati:

1. Il pulsante «Riavvia»
- Perché non si fa: le props sono di sola lettura e i dati seguono un flusso unidirezionale (dal padre ai figli).
- Dove vive e chi lo cambia: vive nei dati passati dal padre (`App`) ed è il padre che deve aggiornarlo e ripassarlo.
- Cosa manca a fine settimana 7: lo stato con `useState` (della settimana 8) per far cambiare un dato nel tempo e aggiornare l'interfaccia.


2. Lo stato calcolato due volte
È impossibile perché sia le schede sia il contatore «Critici» usano la stessa funzione `statoServer` sugli stessi dati `servers` in un modello dichiarativo:
se una scheda è `"critico"`, viene conteggiata come tale anche nel riepilogo.


3. `BadgeStato` (riceve solo `stato`)
Si guadagna riutilizzabilità e disaccoppiamento: il componente funziona per qualsiasi badge di stato senza dipendere dall'intero oggetto `server` o dai suoi campi.

*/
