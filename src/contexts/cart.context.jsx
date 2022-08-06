import { createContext, useReducer } from "react"

import { createAction } from "../utils/reducer/reducer.utils"

const addCartItem = (cartItems, productToAdd) => {

    // find if cartItems contains productToAdd
    const existingCartItems = cartItems.find(cartItem => cartItem.id === productToAdd.id)

    // if found increment quantity
    if(existingCartItems) { 
        return cartItems.map(cartItem => 
            cartItem.id === productToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }
    // if doesn't return new array with modified cartItems => new cart item
    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cartItem to remove
    const existingCartItems = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    // check if the quantity is equal to 1, if it is then remove that item from the cart
    if (existingCartItems.quantity === 1) { 
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    // return cartItems with matching cart item with reduced quantity
    return cartItems.map(cartItem => 
            cartItem.id === cartItemToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
            )
}

const clearCartItem = (cartItems, cartItemToClear) =>{
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal:0,
})

const CART_ACTIONS_TYPES = { 
    SET_CART_ITEMS: "SET_CART_ITEMS",
    SET_IS_CART_OPEN: "SET_IS_CART_OPEN"
}

const cartReducer = (state, action) => { 
    const {type, payload} = action

    switch (type) {

        case CART_ACTIONS_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }

        case CART_ACTIONS_TYPES.SET_IS_CART_OPEN:
            return { 
                ...state,
                isCartOpen: payload
            }

        default:
            throw new Error(`Unhandled type ${type} in cartReducer`)
    }
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount:0,
    cartTotal:0,
}
export const CartProvider = ({children}) => { 

    const [
        {isCartOpen, 
        cartItems, 
        cartCount, 
        cartTotal}, 
        dispatch] = useReducer(cartReducer, INITIAL_STATE)

    const updateCartItemsReducers = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)

        const newCartTotal = newCartItems.reduce((total, cartItem) => 
        total + cartItem.quantity * parseInt(cartItem.price), 0)

        dispatch(createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS,
            {
                cartItems: newCartItems, 
                cartCount: newCartCount, 
                cartTotal: newCartTotal
            }
        ))
    }

    const addItemToCart = (productToAdd) => { 
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemsReducers(newCartItems)
    }

    const removeItemFromCart = (cartItemToRemove) => { 
        const newCartItems = removeCartItem(cartItems, cartItemToRemove)
        updateCartItemsReducers(newCartItems)
    }

    const clearItemFromCart = (cartItemToClear) => { 
        const newCartItems = clearCartItem(cartItems, cartItemToClear)
        updateCartItemsReducers(newCartItems)
    }

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTIONS_TYPES.SET_IS_CART_OPEN, bool))
    }

    const value = {
                    isCartOpen, 
                    setIsCartOpen, 
                    addItemToCart, 
                    removeItemFromCart, 
                    clearItemFromCart, 
                    cartItems, 
                    cartCount, 
                    cartTotal
                }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

