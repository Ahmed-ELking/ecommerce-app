import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { selectCartItems, selectCartTotal } from "../../../store/cart/cart.selector"
import { selectCurrentUser } from "../../../store/user/user.selector"
import CheckoutItem from "../../checkout-item/checkout-item.component"
import PaymentForm from "../../payment-form/payment-form.component"

const HEADER_BLOCK = "md:w-[23%] text-sm md:text-base capitalize text-red-400 font-bold"

const Checkout = () => {

    const cartItems = useSelector( selectCartItems )
    const cartTotal = useSelector( selectCartTotal )
    const currentUser = useSelector( selectCurrentUser )

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
            <span className="mt-7 ml-auto text-lg font-bold md:text-3xl">Total: ${ cartTotal }</span>
            {
                currentUser ? <PaymentForm /> :
                    <div className="w-full text-center p-3 mt-7 text-xl font-bold border border-black bg-red-300">Please Sign In To Complete Your Purchasing Process.
                        <Link className="text-blue-400 text-lg" to="/auth">  Sign In</Link>
                    </div>
            }
            
        </div>
    )
}

export default Checkout 