import {Routes, Route} from "react-router-dom"

import Navigation from "./component/routes/navigation/navigation.component.jsx"
import Home from "./component/routes/home/home.component.jsx"
import Authentication from "./component/routes/authentication/authentication.component.jsx"

const Shop = () => {
  return <h1>Hello from Shop</h1>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
