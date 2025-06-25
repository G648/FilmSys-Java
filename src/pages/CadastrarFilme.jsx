// src/pages/CadastrarFilme.jsx
import React, { useEffect, useState } from "react";
import FilmeForm from "../components/FilmeForm";
import { getAllGeneros } from "../services/generoService";
import { createFilme } from "../services/filmeService";
import { useNavigate } from "react-router-dom";

export default function CadastrarFilme() {
  const [generos, setGeneros] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllGeneros().then(setGeneros);
  }, []);

  const handleSubmit = async (filmePayload) => {
    await createFilme(filmePayload);
    alert("Filme cadastrado!");
    navigate("/filmes");
  };

  return (
    <div className="">
      <FilmeForm generosDisponiveis={generos} onSubmit={handleSubmit} />
    </div>
  );
}
