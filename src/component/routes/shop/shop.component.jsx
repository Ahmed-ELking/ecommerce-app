import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { fetchCategoriesAsync } from "../../../store/categories/category.action.js"
import CategoriesPreview from "../categories-preview/categories-preview.component"
import Category from "../category/category.component"


const Shop = () => {

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch( fetchCategoriesAsync() )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop