

const CartItem = ({cartItem}) => {

    const {name, imageUrl, price, quantity} = cartItem

    return (
        <div className="w-full h-20 flex mb-4">
            <img src={imageUrl} alt={`${name}`} className="w-[30%]" />
            <div className="w-[70%] flex flex-col items-start justify-center py-2 px-4">
                <span className="text-sm font-bold">{name}</span>
                <span>{quantity} x {price}</span>
            </div>
        </div>
    )
}

export default CartItem