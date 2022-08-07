
import {useSelector} from "react-redux"


import CategoryPreview from "../../category-preview/category-preview.component"
import {selectCategoriesMap} from "../../../store/categories/category.selector"



const CategoriesPreview = () => {

  const categoriesMap = useSelector(selectCategoriesMap)

  return (
    <>
      {
        Object.keys(categoriesMap).map(category => {
          const products = categoriesMap[category]
          return <CategoryPreview key={category} category={category} products={products} />
        })
      }
    </>
  )
}

export default CategoriesPreview