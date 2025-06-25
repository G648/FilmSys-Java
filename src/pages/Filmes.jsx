import React, { useEffect, useState } from "react";
import { deleteFilme, getAllFilmes } from "../services/filmeService";
import FilmesTable from "../components/FilmesTable";
import { useNavigate } from "react-router-dom";
import "../styles/Filmes.css";

export default function Filmes() {
  const [filmes, setFilmes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    carregarFilmes();
  }, []);

  const carregarFilmes = async () => {
    try {
      const data = await getAllFilmes();
      setFilmes(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      setFilmes([]); // garante que filmes nunca fique undefined
    }
  };

  const handleEdit = (filme) => {
    navigate(`/filmes/${filme.idFilme}/editar`);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Tem certeza que deseja excluir?");
    if (confirm) {
      try {
        await deleteFilme(id);
        console.log("Excluir filme com ID:", id);
        await carregarFilmes();
      } catch (error) {
        console.error("Erro ao excluir:", error);
        alert("Erro ao excluir filme");
      }
    }
  };

  return (
    <>
      <h1 className="filmes-title">🎬 Tabela de Filmes</h1>
      <div className="filmes-container">
        <button
          onClick={() => navigate("/filmes/novo")}
          className="btn-cadastrar"
        >
          + Cadastrar Novo Filme
        </button>
        <FilmesTable
          filmes={filmes}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}
