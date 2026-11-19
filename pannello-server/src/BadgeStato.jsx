export function BadgeStato({ stato }) {
  const etichetta =
    stato === "offline"
      ? "Offline"
      : stato === "critico"
        ? "Critico"
        : stato === "attenzione"
          ? "Attenzione"
          : "OK";

  return <span className={`badge badge-${stato}`}>{etichetta}</span>;
}