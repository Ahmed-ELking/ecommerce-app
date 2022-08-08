import {useDispatch, useSelector} from "react-redux"

import {clearItemFromCart, addItemToCart, removeItemFromCart} from "../../store/cart/cart.action"
import {selectCartItems} from "../../store/cart/cart.selector"

const CheckoutItem = ({cartItem}) => {

    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const {name, imageUrl, price, quantity} = cartItem

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))

    return (
        <div className="w-full flex items-center min-h-[100px] border-b border-b-gray-400 py-4 text-sm md:text-xl">
            <div className="w-[23%] pr-[15px]">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="w-[23%] md:text-base font-bold">{name}</span>
            <span className="w-[23%] flex">
                <div onClick={removeItemHandler} className="cursor-pointer pl-4 md:pl-0">&#10094;</div>
                <span className="md:px-[10px] px-1">{quantity}</span>
                <div onClick={addItemHandler} className="cursor-pointer">&#10095;</div>
            </span>
            <span className="w-[23%] pl-2 md:pl-0">{price}</span>
            <div onClick={clearItemHandler} className="md:pl-3 cursor-pointer">&#10005;</div>
        </div>
    )
}

export default CheckoutItem