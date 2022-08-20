import { createAction } from "../../utils/reducer/reducer.utils"
import { CART_ACTION_TYPES } from "./cart.types"


export const setIsCartOpen = ( bool ) => createAction( CART_ACTION_TYPES.SET_IS_CART_OPEN, bool )

export const clearCartItems = () => createAction( CART_ACTION_TYPES.CLEAR_CART_ITEMS )

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


export const addItemToCart = (cartItems, productToAdd) => { 
    const newCartItems = addCartItem(cartItems, productToAdd)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => { 
    const newCartItems = removeCartItem(cartItems, cartItemToRemove)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const clearItemFromCart = (cartItems, cartItemToClear) => { 
    const newCartItems = clearCartItem(cartItems, cartItemToClear)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
