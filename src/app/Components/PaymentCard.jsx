

'use client'

import { useEffect,useState } from "react"
import { useSelector } from "react-redux"
import AlertComp from "./Alert"
const PaymentCard=()=>{
    const CheckoutTotal=useSelector(state=>state.CartReducer)
    const [TotalBill,setTotal]=useState(0)
    const [CouponVal,setCoupon]=useState()
    const [CouponValid,isCouponvalid]=useState(false)
    
    const CalculateTotal=()=>{
        let Total=0
        for(let i=0;i<CheckoutTotal.length;i++){
            Total=Total+(Math.ceil(CheckoutTotal[i].price*10))*(CheckoutTotal[i].qty)
        }
        setTotal(Total)
    }
    const ValidateCoupon=()=>{
        console.log(CouponVal)
        if(CouponVal=="FREEDOM78"){
            
            isCouponvalid(true)}
        else isCouponvalid(false)
    }
    
    useEffect(()=>{
        CalculateTotal()
    },[CheckoutTotal])
    return(
        <>
        
        <div className="border-1 py-4 border-black md:w-[70%] m-auto rounded-xl shadow-xl">
                <div className="flex justify-between m-6">
                    <h1 className="font-medium text-xl">Cart Total</h1>
                    <h1 className="font-medium text-xl">₹ {TotalBill}</h1>
                </div>
                <div className="flex justify-between m-6">
                    <h1 className="font-medium text-xl">Cart Discount</h1>
                    <h1 className="font-medium text-xl">{CouponValid?"78%":0}</h1>
                </div>
                <div className="flex justify-between m-6">
                    <h1 className="font-medium text-xl">Delivery Fee</h1>
                    <h1 className="font-semibold text-green-500 text-xl">FREE</h1>
                </div>
                <div className="border-t-2 border-gray"></div>
                <div className="flex justify-between m-6">
                    <h1 className="font-medium text-xl">Order Total</h1>
                    <h1 className="font-medium text-xl">₹ {CouponValid?TotalBill*0.22:TotalBill}</h1>
                </div>
                <div className="w-[80%] flex justify-between border-1 border-black m-auto">
                    <input 
                    onChange={(e)=>setCoupon(e.target.value)}
                    placeholder="Enter Coupon Code" className="w-full border-2 border-gray-400 focus:border-blue-500 focus:border-[3px] focus:outline-none rounded-md p-3
                    "/>
                    <button onClick={ValidateCoupon} disabled={!CouponVal} className="bg-blue-600  flex justify-center mx-auto w-[20%] ml-2
                py-3 rounded-md text-white font-semibold hover:bg-blue-500">Apply</button>
                </div>
                <h1 className="text-center text-gray-500 font-semibold font-sm leading-6 mt-2">Use Coupon code FREEDOM78 to get 78% OFF (Valid for Today only)</h1>

                
                <button
                onClick={()=>alert('Payment done Succesfully')}
                className="bg-blue-600 w-[80%] flex justify-center mx-auto mb-2 mt-4
                py-3 rounded-md text-white font-semibold hover:bg-blue-500"
                >Proceed to Checkout</button>
            
            </div>
        </>
    )
}

export default PaymentCard