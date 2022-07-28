import {useContext} from "react"

import {ReactComponent as ShoppingIcon} from "../../assets/114 shopping-bag.svg"
import {CartContext} from "../../contexts/cart.context"

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <div onClick={toggleIsCartOpen} className="w-11 h-11 flex justify-center items-center relative cursor-pointer">
            <ShoppingIcon className="w-8 h-8" />
            <span className="absolute text-[10px] font-bold bottom-3">0</span>
        </div>
    )
}

export default CartIcon