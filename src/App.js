import {Routes, Route} from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import Navigation from "./component/routes/navigation/navigation.component"
import Home from "./component/routes/home/home.component"
import Authentication from "./component/routes/authentication/authentication.component"
import Shop from "./component/routes/shop/shop.component"
import Checkout from "./component/routes/checkout/checkout.component"
import { checkUserSession } from "./store/user/user.action"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch( checkUserSession() )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
