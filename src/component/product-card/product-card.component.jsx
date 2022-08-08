import {useDispatch, useSelector} from "react-redux"

import {addItemToCart} from "../../store/cart/cart.action"
import {selectCartItems} from "../../store/cart/cart.selector"

const ProductCard = ({product}) => { 

    const {name, imageUrl, price} = product
    const cartItems = useSelector(selectCartItems)

    const dispatch = useDispatch()
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

    return (
        <div className="w-full flex flex-col items-center h-[350px] relative group">
            <img src={imageUrl} alt={`${name}`} className="rounded-md shadow-md shadow-gray-300 object-cover w-full h-[95%] mb-1 group-hover:opacity-80"/>
            <div className="w-full h-[5%] flex justify-between text-lg md:text-xl">
                <span>{name}</span>
                <span>{price}</span>
            </div>
            <button onClick={addProductToCart} className="btn-primary invisible sm:w-fit w-[80%] opacity-70 absolute top-[255px] bg-white text-black border border-solid border-black hover:bg-black hover:text-white hover:border-none group-hover:opacity-80 group-hover:visible">ADD TO CARD</button>
        </div>
    )
}

export default ProductCard