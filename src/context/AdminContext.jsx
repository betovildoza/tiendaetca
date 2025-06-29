import { Children, createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'

export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false)
  const [seleccionado, setSeleccionado] = useState(null)
  const [openEditor, setOpenEditor] = useState(false)
  const apiUrl = "https://681cdce3f74de1d219ae0bdb.mockapi.io/tiendatobe/productos"

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setProductos(data);
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  const agregarProducto = async (producto) => {
    try {
      const respuesta = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
      })
      if (!respuesta.ok) {
        throw new Error('Error al agregar producto')
      }
      const data = await respuesta.json()
      //alert('Producto agregado correctamente')
      Swal.fire({
        title: "Realizado!",
        text: "Producto agregado correctamente!",
        icon: "success"
      });
      cargarProductos()
    } catch (error) {
      console.log(error.message);

    }
  }

  const cargarProductos = async () => {
    try {
      const res = await fetch(apiUrl)
      const data = await res.json()
      setProductos(data)
    } catch (error) {
      console.log('Error al cargar productos ', error)
    }
  }




  const eliminarProducto = async (id) => {
    const result = await Swal.fire({
    title: '¿Estás seguro de eliminar el producto?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
  });

  if (result.isConfirmed) {
    try {
      const respuesta = await fetch(`https://681cdce3f74de1d219ae0bdb.mockapi.io/tiendatobe/productos/${id}`, {
        method: 'DELETE',
      });
      if (!respuesta.ok) throw new Error('Error al eliminar');

      Swal.fire({
        title: "Realizado!",
        text: "Producto eliminado correctamente!",
        icon: "success",
      });

      cargarProductos();
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Hubo un problema al eliminar el producto!",
        icon: "error"
      });
    }
  }
}
  const actualizarProducto = async (producto) => {
    try {
      const respuesta = await fetch(`${apiUrl}/${producto.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      });

      if (!respuesta.ok) throw Error('Error al actualizar el producto');

      const data = await respuesta.json();
      //alert('Producto actualizado correctamente');
      Swal.fire({
        title: "Realizado!",
        text: "Producto actualizado correctamente!",
        icon: "success"
        });
      setOpenEditor(false);
      setSeleccionado(null);
      cargarProductos();
    } catch (error) {
      console.log(error.message);
    }
  };



  return (
    <AdminContext.Provider value={{ productos, loading, open, setOpen, openEditor, setOpenEditor, seleccionado, setSeleccionado, agregarProducto, actualizarProducto, eliminarProducto }}>
      {children}
    </AdminContext.Provider>
  )
}