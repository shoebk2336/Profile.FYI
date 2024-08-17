


const PaymentCard=()=>{
    return(
        <>
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
                <div className="w-[80%] flex justify-between border-1 border-black m-auto">
                    <input placeholder="Enter Coupon Code" className="w-full border-2 border-gray-400 focus:border-blue-500 focus:border-[3px] focus:outline-none rounded-md p-3
                    "/>
                    <button disabled={true} className="bg-blue-600  flex justify-center mx-auto w-[20%] ml-2
                py-3 rounded-md text-white font-semibold hover:bg-blue-500">Apply</button>
                </div>
                <h1 className="text-center text-gray-500 font-semibold font-sm leading-6 mt-2">Use Coupon code FREEDOM78 to get 78% OFF (Valid for Today only)</h1>

                
                <button
                className="bg-blue-600 w-[80%] flex justify-center mx-auto mb-2 mt-4
                py-3 rounded-md text-white font-semibold hover:bg-blue-500"
                >Proceed to Checkout</button>
            
            </div>
        </>
    )
}

export default PaymentCard