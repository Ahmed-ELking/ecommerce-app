import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"

import { Button, BUTTON_TYPE_CLASS } from "../button/button.component"
import { selectCartTotal } from "../../store/cart/cart.selector"
import { clearCartItems } from "../../store/cart/cart.action"
import { selectCurrentUser } from "../../store/user/user.selector"


const PaymentForm = () =>
{ 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const stripe = useStripe()
    const elements = useElements()

    const [ isProcessingPayment, setIsProcessingPayment ] = useState( false )

    const amount = useSelector( selectCartTotal )
    const currentUser = useSelector( selectCurrentUser )

    const paymentHandler = async ( event ) =>
    { 
        event.preventDefault()

        if ( !stripe || !elements ) return

        setIsProcessingPayment( true )
        
        const response = await fetch( "/.netlify/functions/create-payment-intent", { 
            method: "post",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify( { amount: amount * 100 } )
        } ).then( res => res.json() )

        const { paymentIntent: { client_secret } } = response
        
        const paymentResult = await stripe.confirmCardPayment( client_secret, {
            payment_method: {
                card: elements.getElement( CardElement ),
                billing_details: { 
                    name: currentUser.displayName,
                }
            }
        } )
        
        setIsProcessingPayment( false )
        
        if ( paymentResult.error )
        { 
            alert( paymentResult.error.message )
        } else
        {
            if ( paymentResult.paymentIntent.status === "succeeded" )
            {
                alert( "payment successful" )
                navigate( "/shop" )
                dispatch( clearCartItems() )
            }
        }
    }

    return (
        <div className="h-[300px] flex flex-col justify-center items-center">
            <form onSubmit={ paymentHandler } className="h-[100px] min-w-[500px]">
                <h2 className="text-lg font-black">Credit Card Payment : </h2>
                <CardElement className="my-6" />
                <Button isLoading={ isProcessingPayment } className={`${BUTTON_TYPE_CLASS.base} ${BUTTON_TYPE_CLASS.inverted} mx-auto`}>
                Pay Now
                </Button>
            </form>
        </div>
    )
}

export default PaymentForm