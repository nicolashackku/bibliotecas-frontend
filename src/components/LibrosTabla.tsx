import { Biblioteca } from "../models/Biblioteca";

interface Props {
  bibliotecas: Biblioteca[];
}

export default function LibrosTabla({ bibliotecas }: Props) {
  return (
    <div>
      <h2>Libros</h2>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Año</th>
            <th>Biblioteca</th>
          </tr>
        </thead>
        <tbody>
          {bibliotecas.flatMap((b) =>
            b.libros.map((l) => (
              <tr key={l.id}>
                <td>{l.titulo}</td>
                <td>{l.autor}</td>
                <td>{l.anioPublicacion}</td>
                <td>{b.nombre}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
