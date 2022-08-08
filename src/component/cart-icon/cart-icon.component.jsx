import {useSelector, useDispatch} from "react-redux"

import {ReactComponent as ShoppingIcon} from "../../assets/114 shopping-bag.svg"
import {selectIsCartOpen, selectCartCount} from "../../store/cart/cart.selector"
import {setIsCartOpen} from "../../store/cart/cart.action"

const CartIcon = () => {
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)

    const dispatch = useDispatch()

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

    return (
        <div onClick={toggleIsCartOpen} className="w-11 h-11 flex justify-center items-center relative cursor-pointer select-none">
            <ShoppingIcon className="w-8 h-8" />
            <span className="absolute text-[10px] font-bold bottom-3">{cartCount}</span>
        </div>
    )
}

export default CartIcon