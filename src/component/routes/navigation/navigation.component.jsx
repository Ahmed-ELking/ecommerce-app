import {Outlet, Link} from "react-router-dom"
import {useContext} from "react"

import {ReactComponent as Logo} from "../../../assets/086 crown.svg"

import {UserContext} from "../../../contexts/user.context"
import {CartContext} from "../../../contexts/cart.context"

import {signOutUser} from "../../../utils/firebase/firebase.utils"

import CartIcon from "../../cart-icon/cart-icon.component"
import CartDropdown from "../../cart-dropdown/cart-dropdown.component"


const Navigation = () => {

  const {currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)

  return (
    <>
      <div className="mb-3 h-20 w-full flex justify-between">
        <Link className="md:ml-6 h-full w-20 p-5" to="/">
          <Logo />
        </Link>
        <div className="mr-4 md:mr-14 w-1/2 h-full flex items-center justify-end space-x-2">
          <Link className="p-2 border border-black border-solid rounded-md shadow-md shadow-gray-300 hover:bg-slate-400 hover:text-white" to="/shop">
            SHOP
          </Link>
          {
            currentUser ? <span onClick={signOutUser} className="cursor-pointer p-2 border border-black border-solid rounded-md shadow-md shadow-gray-300 hover:bg-slate-400 hover:text-white" >SIGN OUT</span>
            : 
            <Link className="p-2 border border-black border-solid rounded-md shadow-md shadow-gray-300 hover:bg-slate-400 hover:text-white" to="/auth">
            SIGN IN
            </Link>
          }
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
