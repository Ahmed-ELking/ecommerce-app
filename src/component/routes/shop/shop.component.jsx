import {useContext} from "react"

import {ProductsContext} from "../../../contexts/products.context"
import ProductCard from "../../product-card/product.component"



const Shop = () => {

  const {products} = useContext(ProductsContext)

  return (
    <div className="container p-2 mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-x-[10px] gap-y-[50px]">
      {
        products.map(product => <ProductCard key={product.id} product={product} />)
      }
    </div>
  )
}

export default Shop