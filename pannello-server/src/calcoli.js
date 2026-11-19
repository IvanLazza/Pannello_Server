export const SOGLIE = {
  attenzione: 70,
  critico: 90,
};

export function statoServer(server) {
  return !server.online
    ? "offline"
    : server.cpu >= SOGLIE.critico
      ? "critico"
      : server.cpu >= SOGLIE.attenzione
        ? "attenzione"
        : "ok";
}

export function contaPerStato(servers, stato) {
  return servers.filter((s) => statoServer(s) === stato).length;
}

export function cpuMedia(servers) {
  const onlineServers = servers.filter((s) => s.online);
  if (onlineServers.length === 0) return null;

  const sommaCpu = onlineServers.reduce((acc, s) => acc + s.cpu, 0);
  return sommaCpu / onlineServers.length;
}

export function piuLento(servers) {
  return servers
    .filter((s) => s.online)
    .reduce((peggiore, corrente) => {
      if (peggiore === null || corrente.latenza > peggiore.latenza) {
        return corrente;
      }
      return peggiore;
    }, null);
}

export function trovaServer(servers, nome) {
  return servers.find((s) => s.nome === nome);
}