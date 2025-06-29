import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(false);
    const [carga, setCarga] = useState(true);
    //const [isAuthenticated, setIsAuth] = useState(false)
    const [busqueda, setBusqueda] = useState("")

    const productosFiltrados = productos.filter((producto) => producto?.nombre.toLowerCase().includes(busqueda.toLowerCase()))


    const eliminarProducto = (product) => {
        setCart(prevCart => prevCart.filter(item => item.id !== product.id));
    };

    const [isCartOpen, setCartOpen] = useState(false);

    const handleAddToCart = (product) => {
        const productExist = cart.find((item) => item.id === product.id);

        if (productExist) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                )
            );
            toast.info(`Cantidad aumentada para "${product.nombre}"`);
        } else {
            setCart([...cart, product]);
            toast.success(`"${product.nombre}" agregado al carrito`);
        }
    };

    const borrarProducto = (product) => {
        setCart((preVCart) => {
            return preVCart
                .map((item) => {
                    if (item.id === product.id) {
                        if (item.cantidad > 1) {
                            return { ...item, cantidad: item.cantidad - 1 };
                        } else {
                            return null;
                        }
                    } else {
                        return item;
                    }
                })
                .filter((item) => item != null);
        });
    };

    const vaciarCarrito = () => {
        setCart([]);
    };

    useEffect(() => {
        fetch(
            "https://681cdce3f74de1d219ae0bdb.mockapi.io/tiendatobe/productos"
        )
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setTimeout(() => {
                    setProductos(datos);
                    setCarga(false);
                }, 2000)


            })
            .catch((error) => {
                console.error("Error:", error);
                setCarga(false);
                setError(true);
            });
    }, []);

    if (error) return <p>Hubo un error al cargar los productos.</p>;

    const cartCount = cart.length

    return (
        <CartContext.Provider value={{ carga, error, productos, cartCount, cart, isCartOpen, eliminarProducto, setCartOpen, borrarProducto, vaciarCarrito, handleAddToCart, productosFiltrados, busqueda, setBusqueda }}>
            {children}
        </CartContext.Provider>

    )
}