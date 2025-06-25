export default function FilmeCard({ filme }) {
  console.log(filme);
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-bold">{filme.nomeFilme}</h2>
      <p className="text-gray-600">Ano: {filme.anoLancamentoFilme}</p>
      <div className="mt-2">
        <p className="font-semibold">Gêneros:</p>
        <ul className="list-disc list-inside">
          {filme.generos && filme.generos.length > 0 ? (
            <ul className="list-disc list-inside">
              {filme.generos.map((fg, index) => (
                <li key={index}>
                  {fg || "Gênero desconhecido"}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500 italic">Sem gênero definido</p>
          )}
        </ul>
      </div>
    </div>
  );
}
