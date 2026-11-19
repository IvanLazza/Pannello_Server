export function Avvisi({ avvisi }) {
  const vuoto = avvisi.length === 0;

  return (
    <section className={`avvisi${vuoto ? " avvisi-vuoto" : ""}`}>
      <h2>Avvisi</h2>
      {vuoto ? (
        <p>Nessun avviso attivo.</p>
      ) : (
        <ul>
          {avvisi.map((avviso, idx) => (
            <li key={idx}>{avviso}</li>
          ))}
        </ul>
      )}
    </section>
  );
}