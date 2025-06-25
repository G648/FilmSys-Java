// src/services/filmeService.js
import api from "../api/api";

export const getAllFilmes = async () => {
  const response = await api.get("/filmes");
  return response.data;
};

export const getFilmeById = async (idFilme) => {
  const response = await api.get(`/filmes/${idFilme}`);
  return response.data;
};

export const createFilme = async (filme) => {
  const response = await api.post("/filmes", filme);
  return response.data;
};

export const updateFilme = async (filme) => {
  const response = await api.put(`/filmes/${filme.idFilme}`, filme);
  return response.data;
};

export const deleteFilme = async (idFilme) => {
  const response = await api.delete(`/filmes/${idFilme}`);
  return response.data;
};
