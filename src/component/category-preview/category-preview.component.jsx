import { Link } from 'react-router-dom'

import ProductCard from "../product-card/product-card.component"

const CategoryPreview = ( { category, products } ) =>
{

    return (
        <div className="container p-2 mx-auto flex flex-col mb-[30px]">
            <Link to={category} className="w-fit mb-6 text-lg font-black cursor-pointer md:text-2xl">{category.toUpperCase()}</Link>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-[20px] gap-y-[50px]">
                {
                    products
                        .filter((_, index) => index < 4)
                        .map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}

export default CategoryPreview