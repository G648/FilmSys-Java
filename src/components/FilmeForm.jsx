import React, { useEffect, useState } from "react";
import "../styles/FilmeForm.css";

export default function FilmeForm({ onSubmit, filmeEditado, generosDisponiveis }) {
  const [nomeFilme, setNomeFilme] = useState("");
  const [anoLancamentoFilme, setAnoLancamentoFilme] = useState("");
  const [generoIdsSelecionados, setGeneroIdsSelecionados] = useState([]);

  useEffect(() => {
    if (filmeEditado) {
      setNomeFilme(filmeEditado.nomeFilme);
      setAnoLancamentoFilme(filmeEditado.anoLancamentoFilme);
      const ids = filmeEditado.generos?.map((fg) => fg.genero?.idGenero) || [];
      setGeneroIdsSelecionados(ids);
    }
  }, [filmeEditado]);

  const handleCheckboxChange = (id) => {
    setGeneroIdsSelecionados((prev) =>
      prev.includes(id) ? prev.filter((gid) => gid !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filmePayload = {
      nomeFilme,
      anoLancamentoFilme: parseInt(anoLancamentoFilme),
      generoIds: generoIdsSelecionados,
    };

    if (filmeEditado && filmeEditado.idFilme) {
      filmePayload.idFilme = filmeEditado.idFilme;
    }

    console.log("Payload enviado:", filmePayload);
    onSubmit(filmePayload);
  };

  return (
    <form onSubmit={handleSubmit} className="filme-form">
      <h2 className="form-title">
        {filmeEditado ? "Editar Filme" : "Cadastrar Novo Filme"}
      </h2>

      <div className="form-group">
        <label>Nome do Filme</label>
        <input
          type="text"
          value={nomeFilme}
          onChange={(e) => setNomeFilme(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Ano de Lançamento</label>
        <input
          type="number"
          value={anoLancamentoFilme}
          onChange={(e) => setAnoLancamentoFilme(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Gêneros</label>
        <div className="checkbox-group">
          {generosDisponiveis.map((genero) => (
            <label key={genero.idGenero} className="checkbox-item">
              <input
                type="checkbox"
                checked={generoIdsSelecionados.includes(genero.idGenero)}
                onChange={() => handleCheckboxChange(genero.idGenero)}
              />
              {genero.nomeGenero}
            </label>
          ))}
        </div>
      </div>

      <button type="submit" className="form-button">
        {filmeEditado ? "Atualizar" : "Cadastrar"}
      </button>
    </form>
  );
}
