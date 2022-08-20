
export const BUTTON_TYPE_CLASS = {
    "base": "flex h-12 w-auto min-w-[120px] items-center justify-center bg-black px-9 text-sm font-black uppercase leading-10 tracking-wide text-white hover:border hover:border-solid hover:border-black hover:bg-white hover:text-black",
    "google": "bg-[#4285f4] text-white hover:bg-[#357ae8] hover:border-none",
    inverted: "bg-white text-black border border-solid border-black hover:bg-black hover:text-white hover:border-none"
}

export const Button = ( { children, isLoading, ...otherProps } ) =>
{ 
    return <button disabled={ isLoading } { ...otherProps }>
            { isLoading ?
                <div className="h-[60vh] w-full flex justify-center items-center">
                    <div className="inline-block w-[30px] h-[30px] border-4 border-solid border-slate-300 rounded-full border-t-[#636767] animate-spin"/>
                </div>
                : children
            }
            </button>
}
