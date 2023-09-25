import { createContext, useState } from "react";

export const CartContext = createContext(
    {
        cart: []
    }
)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [tot, setTotal] = useState(0)
    const [totQuantity, setTotQuantity] = useState(0)

    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
            setTotQuantity(totQuantity + quantity)
            const subtotal = (item.price * quantity)
            setTotal(tot + subtotal)
        } else {
            console.error("Producto ya existente")
        }

        console.log("addItem - CartContext")
        console.log(item)
        console.log(quantity)
        console.log(cart)
    }


    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
        setTotal(0)
        setTotQuantity(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const total = tot
    const totalCant = totQuantity

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart, totQuantity, tot, total, totalCant}}>
            {children}
        </CartContext.Provider>
    )


}