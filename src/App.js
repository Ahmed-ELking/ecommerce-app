import {Routes, Route} from "react-router-dom"

import Navigation from "./component/routes/navigation/navigation.component.jsx"
import Home from "./component/routes/home/home.component.jsx"
import SignIn from "./component/routes/sign-in/sign-in.component.jsx"

const Shop = () => {
  return <h1>Hello from Shop</h1>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App
