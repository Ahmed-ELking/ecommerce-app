import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { selectCurrentUser } from "../../../store/user/user.selector"
import { selectCartItems } from "../../../store/cart/cart.selector"
import SignUp from "../../sign-up-form/sign-up-form.component"
import SignIn from "../../sign-in-form/sign-in-form.component"



const Authentication = () => {

  const navigate = useNavigate()
  const cartItems = useSelector( selectCartItems )
  const currentUser = useSelector( selectCurrentUser )

  useEffect( () =>
  {
    if ( currentUser && cartItems.length ) navigate( "/checkout" )
    else if (currentUser)  navigate( "/shop" )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ currentUser, cartItems.length ] )
  
  return (
    <div className="container mx-4 md:mx-auto flex flex-col gap-4 md:flex-row md:justify-around md:gap-0">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Authentication
