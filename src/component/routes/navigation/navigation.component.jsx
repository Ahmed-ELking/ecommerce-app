import {Outlet, Link} from "react-router-dom"

import {ReactComponent as Logo} from "../../../assets/086 crown.svg"


const Navigation = () => {
  return (
    <>
      <div className="container mb-6 h-20 w-full flex justify-between">
        <Link className="md:ml-6 h-full w-20 p-5" to="/">
          <Logo />
        </Link>
        <div className="w-1/2 h-full flex items-center justify-end space-x-2">
          <Link className="p-2 border border-black border-solid rounded-md shadow-md shadow-gray-300 hover:bg-slate-400 hover:text-white" to="/shop">
            SHOP
          </Link>
          <Link className="p-2 border border-black border-solid rounded-md shadow-md shadow-gray-300 hover:bg-slate-400 hover:text-white" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
