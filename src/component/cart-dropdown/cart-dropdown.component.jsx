import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { selectCartItems } from "../../store/cart/cart.selector"
import CartItem from "../cart-item/cart-item.component"
import { Button, BUTTON_TYPE_CLASS } from "../button/button.component"

const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems)

    const navigate = useNavigate()

    const goToCheckoutHandler = () => navigate("/checkout")

    return (
        <div className="absolute w-[200px] h-[300px] flex flex-col p-5 border border-solid border-black bg-white top-[80px] right-[20px] z-[5] md:w-[240px] md:h-[340px] md:right-[42px]">
            {
                cartItems.length ? (
                    <div className="h-[240px] flex flex-col overflow-y-scroll"> 
                    {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
                    </div>
                )
                : (<span className="md:text-lg my-12 mx-auto">YOUR CART IS EMPTY</span>)
            }
            
            <Button onClick={goToCheckoutHandler} className={`${BUTTON_TYPE_CLASS.base} px-3 mt-auto`}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown