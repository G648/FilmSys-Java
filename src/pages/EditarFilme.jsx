// src/pages/EditarFilme.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FilmeForm from "../components/FilmeForm";
import { getFilmeById, updateFilme } from "../services/filmeService";
import { getAllGeneros } from "../services/generoService";

export default function EditarFilme() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [generos, setGeneros] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFilmeById(id).then(setFilme);
    getAllGeneros().then(setGeneros);
  }, [id]);

  const handleSubmit = async (filmePayload) => {
    await updateFilme(filmePayload);
    console.log(filmePayload);
    alert("Filme atualizado!");
    navigate("/filmes");
  };

  return (
    <div className="p-4">
      {filme ? (
        <FilmeForm
          filmeEditado={filme}
          generosDisponiveis={generos}
          onSubmit={handleSubmit}
        />
      ) : (
        <p>Carregando filme...</p>
      )}
    </div>
  );
}
