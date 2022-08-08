import { useSelector } from "react-redux"


import CategoryPreview from "../../category-preview/category-preview.component"
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../../store/categories/category.selector"
import Spinner from "../../spinner/spinner.component"


const CategoriesPreview = () => {

  const categoriesMap = useSelector( selectCategoriesMap )
  const isLoading = useSelector(selectCategoriesIsLoading)

  return (
    <>
      {
        isLoading ? <Spinner /> :
        ( Object.keys(categoriesMap).map(category => {
          const products = categoriesMap[category]
          return <CategoryPreview key={category} category={category} products={products} />
        }))
      }
    </>
  )
}

export default CategoriesPreview