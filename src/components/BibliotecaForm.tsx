import { FormEvent, useState } from "react";
import { registrarBiblioteca } from "../services/bibliotecaService";

interface Props {
  onRegistrada: () => void;
}

export default function BibliotecaForm({ onRegistrada }: Props) {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [error, setError] = useState("");

  async function enviar(e: FormEvent) {
    e.preventDefault();
    setError("");
    try {
      await registrarBiblioteca({ nombre, direccion, ciudad });
      setNombre("");
      setDireccion("");
      setCiudad("");
      onRegistrada();
    } catch (err) {
      setError((err as Error).message);
    }
  }

  return (
    <form onSubmit={enviar}>
      <h2>Registrar biblioteca</h2>
      <label>
        Nombre
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </label>
      <label>
        Dirección
        <input value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
      </label>
      <label>
        Ciudad
        <input value={ciudad} onChange={(e) => setCiudad(e.target.value)} required />
      </label>
      <button type="submit">Registrar</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}
