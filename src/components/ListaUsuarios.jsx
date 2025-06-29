import React, { useEffect, useState } from "react";

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())           
      .then((datos) => {
        setUsuarios(datos);                
        setCargando(false);                
      })
      .catch((err) => {
        console.error("Error al traer los datos:", err);
        setError(true);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando usuarios...</p>;
  if (error) return <p>Hubo un error al cargar los usuarios.</p>;

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>{u.name} - {u.website}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;
