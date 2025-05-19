import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(false);
    const [carga, setCarga] = useState(true);
    const [isAuthenticated, setIsAuth] = useState(false)


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
        } else {
            setCart([...cart, product]);
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
        <CartContext.Provider value={{ carga, error, productos, cartCount, cart, isCartOpen, eliminarProducto, setCartOpen, borrarProducto, vaciarCarrito, handleAddToCart, isAuthenticated }}>
            {children}
        </CartContext.Provider>

    )
}