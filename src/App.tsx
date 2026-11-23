import { useCallback, useEffect, useState } from "react";
import BibliotecaForm from "./components/BibliotecaForm";
import LibrosTabla from "./components/LibrosTabla";
import { Biblioteca } from "./models/Biblioteca";
import { consultarBibliotecas } from "./services/bibliotecaService";

export default function App() {
  const [bibliotecas, setBibliotecas] = useState<Biblioteca[]>([]);
  const [error, setError] = useState("");

  const cargar = useCallback(async () => {
    try {
      setBibliotecas(await consultarBibliotecas());
      setError("");
    } catch (err) {
      setError((err as Error).message);
    }
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  return (
    <main>
      <h1>Sistema de bibliotecas y libros</h1>
      <BibliotecaForm onRegistrada={cargar} />
      {error && <p className="error">{error}</p>}
      <LibrosTabla bibliotecas={bibliotecas} />
    </main>
  );
}
