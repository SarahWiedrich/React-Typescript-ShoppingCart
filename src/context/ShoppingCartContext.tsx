import { createContext, useContext, ReactNode, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { ShoppingCart } from "../components/ShoppingCart"

type ShoppingCartProviderProps ={
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}


const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps){
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[])
    const [isOpen, setIsOpen] = useState(false)

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    // check item quantity by id, retrun: take cart items, find that item with the current id, if we have that id value, return the quantity, else/or return default value of 0
    function getItemQuantity(id: number){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number){
        // return all items in the cart
        setCartItems(currentItems => {
            // check to see if we DON'T have this item in the cart
            if(currentItems.find(item => item.id === id) == null){
                // if item does NOT exist - add it to the cart and increase the quantity
                return [...currentItems, { id, quantity: 1 }]
            } else {
                return currentItems.map(item => {
                    // if you found the item - keep the item - increase the quantity by 1
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                        // else return item as is without any changes
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number){
        // return all items in the cart
        setCartItems(currentItems => {
            // if the quantity of that item is 1, then delete it
            if(currentItems.find(item => item.id === id)?.quantity === 1){
                return currentItems.filter(item => item.id !==id)
            } else {
                return currentItems.map(item => {
                    // if you found the item - keep the item - decrease the quantity by 1
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                        // else return item as is without any changes
                    }
                })
            }
        })
    }

    function removeFromCart(id: number){
        setCartItems(currentItems => {
            // filter out the items that are not equal to our current id
            return currentItems.filter(item => item.id !==id)
        })
    }

    return (
    <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity, openCart, closeCart }}>
        {children}
        <ShoppingCart isOpen={ isOpen } />
    </ShoppingCartContext.Provider>)
}