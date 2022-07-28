

const CartDropdown = () => {

    return (
        <div className="absolute w-[240px] h-[340px] flex flex-col p-5 border border-solid border-black bg-white top-[80px] right-[42px] z-[5]">
            <div className="h-[240px] flex flex-col overflow-scroll"/>
            <button className="btn-primary mt-auto">GO TO CHECKOUT</button>
        </div>
    )
}

export default CartDropdown