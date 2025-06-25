import "../styles/FilmesTable.css";

export default function FilmesTable({ filmes, onEdit, onDelete }) {
  return (
    <div className="table-container">
      <table className="filmes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ano</th>
            <th>Gêneros</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filmes.map((filme) => (
            <tr key={filme.idFilme}>
              <td>{filme.idFilme}</td>
              <td>{filme.nomeFilme}</td>
              <td>{filme.anoLancamentoFilme}</td>
              <td>
                {filme.generos?.length > 0
                  ? filme.generos.map((fg) => fg).join(", ")
                  : "Sem gênero"}
              </td>
              <td className="acoes">
                <button className="btn-editar" onClick={() => onEdit(filme)}>
                  Editar
                </button>
                <button className="btn-excluir" onClick={() => onDelete(filme.idFilme)}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
