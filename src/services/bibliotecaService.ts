import { Biblioteca, BibliotecaNueva } from "../models/Biblioteca";

const API_URL = "http://localhost:8081/bibliotecas";

export async function consultarBibliotecas(): Promise<Biblioteca[]> {
  const respuesta = await fetch(API_URL);
  if (!respuesta.ok) throw new Error("No se pudo consultar las bibliotecas");
  return respuesta.json();
}

export async function registrarBiblioteca(biblioteca: BibliotecaNueva): Promise<Biblioteca> {
  const respuesta = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(biblioteca),
  });
  if (!respuesta.ok) throw new Error("No se pudo registrar la biblioteca");
  return respuesta.json();
}
