import CategoryItem from "../category-item/category-item.component"

const CategoriesMenu = ({categories}) => {
  return (
    <div className="container space-y-3 px-2 md:flex md:flex-wrap md:gap-3 mx-auto mt-4 md:space-y-0 md:px-0">
      {
        categories.map((category) => <CategoryItem id={category.id} category={category}/> )
      }
    </div>
  )
}

export default CategoriesMenu
