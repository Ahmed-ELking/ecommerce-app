import {useContext} from "react"

import {CartContext} from "../../contexts/cart.context"

const ProductCard = ({product}) => { 

    const {name, imageUrl, price} = product

    const {addItemToCart} = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product)

    return (
        <div className="w-full flex flex-col items-center h-[350px] relative group">
            <img src={imageUrl} alt={`${name}`} className="rounded-md shadow-md shadow-gray-300 object-cover w-full h-[95%] mb-1 group-hover:opacity-80"/>
            <div className="w-full px-1 h-[5%] flex justify-center text-lg">
                <span className="w-[85%] mb-4">{name}</span>
                <span className="w-[15%]">{price}</span>
            </div>
            <button onClick={addProductToCart} className="btn-primary invisible sm:w-fit w-[80%] opacity-70 absolute top-[255px] bg-white text-black border border-solid border-black hover:bg-black hover:text-white hover:border-none group-hover:opacity-80 group-hover:visible">ADD TO CARD</button>
        </div>
    )
}

export default ProductCard