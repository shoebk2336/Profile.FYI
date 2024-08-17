import CartCard from "../Components/CartCard"
import Navbar from "../Components/Navbar"



const Cart=()=>{

    return(
        <>
        <Navbar/>
        <CartCard/>
        <CartCard/>
        <div className="border-1 py-4 border-black md:w-[70%] m-auto rounded-xl shadow-xl">
                <div className="flex justify-between m-6">
                    <h1 className="font-medium text-xl">Cart Total</h1>
                    <h1 className="font-medium text-xl">₹ 1000</h1>
                </div>
                <div className="flex justify-between m-6">
                    <h1 className="font-medium text-xl">Cart Discount</h1>
                    <h1 className="font-medium text-xl">10%</h1>
                </div>
                <div className="flex justify-between m-6">
                    <h1 className="font-medium text-xl">Delivery Fee</h1>
                    <h1 className="font-semibold text-green-500 text-xl">FREE</h1>
                </div>
                <div className="border-t-2 border-gray"></div>
                <div className="flex justify-between m-6">
                    <h1 className="font-medium text-xl">Order Total</h1>
                    <h1 className="font-medium text-xl">₹ 1000</h1>
                </div>
                <button
                className="bg-blue-600 w-[80%] flex justify-center mx-auto mb-2 mt-4
                py-3 rounded-md text-white font-semibold hover:bg-blue-500"
                >Proceed to Checkout</button>
            
            </div>
        </>
    )
}

export default Cart