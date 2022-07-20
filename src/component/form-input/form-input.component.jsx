

const FormInput = ({label, ...otherProps}) => {
  return (
    <div className="relative mt-4">
      <input {...otherProps} className="peer w-full text-black font-black text-lg p-2 rounded-none border-b border-b-gray-500 mt-6 focus:outline-none" />
      { label && (
        <label className={`${otherProps.value.length ? "-top-4 text-xs text-black": ""} text-gray-500 text-base font-normal pointer-events-none absolute left-1 top-2 transition-all duration-300 ease-linear peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black peer-focus:font-black`}>{label}</label>
      )}
    </div>
  )
}

export default FormInput
