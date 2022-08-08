import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import { selectCategoriesMap, selectCategoriesIsLoading } from "../../../store/categories/category.selector"
import ProductCard from "../../product-card/product-card.component"
import Spinner from "../../spinner/spinner.component"


const Category = () => { 

    const { category } = useParams()
    const categoriesMap = useSelector( selectCategoriesMap )
    const isLoading = useSelector( selectCategoriesIsLoading )
    const [ products, setProducts ] = useState( categoriesMap[ category ] )

    useEffect(() => {
        setProducts( categoriesMap[ category ] )
    }, [ category, categoriesMap ] )

    return (
        <div className="container p-2 mx-auto">
            <h2 className="mb-6 text-center md:text-4xl text-xl font-black">
                {category.toUpperCase()}
            </h2>
            {
                isLoading ? <Spinner /> : 
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-[20px] gap-y-[50px]">
                    {
                        products && products.map(product => <ProductCard key={product.id} product={product} />)
                    }
                </div>
            }
            
        </div>
    )
}

export default Category