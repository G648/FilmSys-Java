// src/services/generoService.js
import api from "../api/api";

export const getAllGeneros = async () => {
  const response = await api.get("/generos");
  return response.data;
};

export const getGeneroById = async (idGenero) => {
  const response = await api.get(`/generos/${idGenero}`);
  return response.data;
};

export const createGenero = async (genero) => {
  const response = await api.post("/generos", genero);
  return response.data;
};  

export const updateGenero = async (genero) => {
  const response = await api.put(`/generos/${genero.idGenero}`, genero);
  return response.data;
};

export const deleteGenero = async (idGenero) => {
  const response = await api.delete(`/generos/${idGenero}`);
  return response.data;
};
