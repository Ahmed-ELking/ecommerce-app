
const CategoryItem = ({category}) => {
  return (
    <div className="flex-auto min-w-[30%] h-60  flex justify-center items-center border-[1px] border-solid border-black rounded-md shadow-md overflow-hidden hover:cursor-pointer group">
      <div className="object-center object-cover w-full h-full transition-transform ease-linear delay-300 group-hover:scale-110" style={{backgroundImage: `url(${category.imageUrl})`}}/>
        <div className="absolute bg-white p-3 h-20 flex flex-col justify-between items-center border-[1px] border-solid border-black rounded-md opacity-70 group-hover:opacity-90">
          <h1 className="font-bold text-2xl text-gray-700">{category.title}</h1>
          <p className="font-lighter text-sm">Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryItem
