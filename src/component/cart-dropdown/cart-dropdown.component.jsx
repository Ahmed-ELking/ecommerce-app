import {useContext} from "react"

import {CartContext} from "../../contexts/cart.context"
import CartItem from "../cart-item/cart-item.component"

const CartDropdown = () => {

    const {cartItems} = useContext(CartContext)

    return (
        <div className="absolute w-[240px] h-[340px] flex flex-col p-5 border border-solid border-black bg-white top-[80px] right-[42px] z-[5]">
            {
                cartItems.length ? (
                    <div className="h-[240px] flex flex-col overflow-y-scroll"> 
                    {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
                    </div>
                )
                : (<span className="text-lg my-12 mx-auto">YOUR CART IS EMPTY</span>)
            }
            
            <button className="btn-primary mt-auto">GO TO CHECKOUT</button>
        </div>
    )
}

export default CartDropdown