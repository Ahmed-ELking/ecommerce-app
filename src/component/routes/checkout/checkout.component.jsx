import {useContext} from "react"

import {CartContext} from "../../../contexts/cart.context"
import CheckoutItem from "../../checkout-item/checkout-item.component"

const HEADER_BLOCK = "md:w-[23%] text-sm md:text-base capitalize text-red-400 font-bold"

const Checkout = () => {

    const {cartItems, cartTotal} = useContext(CartContext)

    return (
        <div className="select-none w-[90%] md:w-[56%] min-h-[90vh] flex flex-col items-center mx-auto mt-[50px]">
            <div className="w-full py-[10px] flex justify-between border-b border-b-gray-400">
                <div className={`${HEADER_BLOCK}`}>
                    <span>Product</span>
                </div>
                <div className={`${HEADER_BLOCK}`}>
                    <span>Description</span>
                </div>
                <div className={`${HEADER_BLOCK}`}>
                    <span>Quantity</span>
                </div>
                <div className={`${HEADER_BLOCK}`}>
                    <span>Price</span>
                </div>
                <div className={`${HEADER_BLOCK} md:w-[9%]`}>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} /> )
            }
            <span className="mt-7 ml-auto text-lg font-bold md:text-3xl">Total: ${cartTotal}</span>
        </div>
    )
}

export default Checkout 