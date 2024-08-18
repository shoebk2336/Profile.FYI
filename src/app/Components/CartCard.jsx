
'use client'

import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
const CartCard=(Data)=>{
    const dispatch=useDispatch()
    const [qty,setQty]=useState(1)
    const ProductQty=useSelector(state=>state.CartReducer)
    console.log('qtyreducer',ProductQty)
    return(<>
        <div className="border-1 border-black rounded-xl overflow-hidden
        md:flex md:justify-between md:h-[400px] md:w-[70%] shadow-2xl
        p-2 mx-auto">
            <img 
            className="rounded-xl w-full md:w-[25%]  "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxlT_-PpQJbt3DsWOZDQYohRy4YF8ck1n8PA&s" alt='product'/>
            <div className=" border-1 border-black md:w-[40%] lg:w-[30%]  mt-4 mr-4 p-4 ">
                <h1 className="font-bold text-xl ">{Data?.Data?.name}</h1>
                <h1 className="font-medium text-lg ">{Data?.Data?.description}</h1>
                <div className=" flex justify-between w-[30%] md:w-[40%]  mt-2 text-center">
                    <h1 className="flex justify-between px-3 py-1 bg-green-600 w-[40%] md:w-[45%] rounded-md text-white font-bold">{Data?.Data?.rating} 
                        <svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[20px] text-center my-auto font-extrabold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                    </h1>
                    <h1 className="my-auto font-semibold text-[18px] text-gray-500">{Math.ceil(Data?.Data?.rating*100)}</h1>
                </div>
                <div className="flex mt-4  justify-between w-[40%] md:w-[55%]">
                    <h1 className="flex  font-extrabold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        {Math.ceil(Data?.Data?.price*10)}
                    </h1>
                    <h1 className="font-medium line-through text-gray-500">
                    {Math.ceil(Data?.Data?.price*10*1.2)}</h1>
                    <h1 className="font-bold text-green-600">65% off</h1>
                </div>
                <div className="flex  justify-between mt-2">
                    <div className=" flex justify-between items-center w-[30%]">
                    <h1 className="font-semibold">Size</h1>
                    <h1 className="bg-slate-300 p-1 ">XL</h1>
                    </div>
                    <div className="flex w-[30%] ">
                        <input
                        value={Data?.Data?.qty}
                        readOnly
                        className="border-2 border-gray-400 m-auto rounded-md w-12 h-[50px] text-center "/>
                        <div className="flex flex-col h-[50px] justify-between">
                        <button onClick={()=>dispatch({type:"QtyADD",payload:Data?.Data?.product_id})} className="bg-slate-300 hover:bg-slate-400 hover:text-white border-2 border-gray-400 rounded-md w-6 h-6 text-center">+</button>
                        <button onClick={()=>dispatch({type:"QtyReduce",payload:Data?.Data?.product_id})} className="bg-slate-300 hover:bg-slate-400 hover:text-white border-2 border-gray-400 rounded-md w-6 h-6 text-center">-</button>
                        </div>
                    </div>
                </div>
                <button
                onClick={()=>dispatch({type:"Del",payload:Data?.Data?.product_id})}
                className="bg-gray-300 hover:bg-gray-200 hover:text-gray-800 text-gray-700 p-2 w-[80%] flex justify-center m-auto font-semibold leading-6 text-base rounded-lg mt-[10%]"
                >Remove</button>
            
            </div>
            
        </div>
        </>
        )
    }
        
export default CartCard