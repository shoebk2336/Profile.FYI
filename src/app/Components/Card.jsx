'use client'
import {useDispatch} from 'react-redux'

const ProductCard=(Data)=>{
    const {data}=Data
    const dispatch=useDispatch()
    return(<>
        <div
    className="md:max-w-[100%] rounded-xl
    bg-white overflow-hidden p-4 shadow-2xl 
    "
    >
    <img
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxlT_-PpQJbt3DsWOZDQYohRy4YF8ck1n8PA&s'
    alt="product"
    className="w-full  object-cover rounded-xl"
    />
    <div className="mt-4 mb-4 ">
    <div>
    <h1 className="text-3xl font-bold text-center">{Data?.data?.name}</h1>
    <p className="text-center from-neutral-500">{Data?.data?.description}</p>
    </div>
    <div className=" flex justify-between w-[40%] mt-2 text-center">
    <h1 className="flex justify-between px-3 py-1 bg-green-600 w-[40%] rounded-md text-white font-bold">{Data?.data?.rating}
    <svg
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[20px] text-center my-auto font-extrabold">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>

</h1>
<h1 className="my-auto font-semibold text-[18px] text-gray-500">({Math.ceil(Data?.data?.rating*100)})</h1>
</div>
<div className="flex mt-4  justify-between w-[65%] md:w-[45%]">
<h1 className="flex  font-extrabold">

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
{Math.ceil(Data?.data?.price*10)}
</h1>
<h1 className="font-medium line-through text-gray-500">
{Math.ceil(Data?.data?.price*10*1.2)}</h1>
<h1 className="font-bold text-green-600">{Data?.data?.discount}% off</h1>
</div>
    </div>
    <div className="flex justify-between mb-1 mt-4">
    <button className="bg-blue-500 p-3 px-5 rounded-xl font-semibold hover:bg-blue-700 hover:text-white">Buy Now</button>
    <button
    onClick={()=>dispatch({type:"Add",payload:data})}
    className="bg-blue-500 p-3 px-5 rounded-xl font-semibold hover:bg-blue-700 hover:text-white">Add to Cart</button>
    </div>
    </div>
        </>)
}

export default ProductCard