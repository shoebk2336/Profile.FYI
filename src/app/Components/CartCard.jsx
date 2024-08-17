

const CartCard=()=>{
    return(<>
        <div className="border-1 border-black rounded-xl overflow-hidden
        md:flex md:justify-between md:h-[400px] md:w-[70%] shadow-2xl
        p-2 mx-auto">
            <img 
            className="rounded-xl w-full md:w-[25%]  "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxlT_-PpQJbt3DsWOZDQYohRy4YF8ck1n8PA&s" alt='product'/>
            <div className=" border-1 border-black md:w-[30%] mt-4 ">
                <h1 className="font-bold text-xl ">Product Name</h1>
                <h1 className="font-medium text-lg ">Product description</h1>
                <div className=" flex justify-between w-[65%] mt-2 text-center">
                    <h1 className="flex justify-between px-3 py-1 bg-green-600 w-[30%] md:w-[40%] rounded-md text-white font-bold">4 
                        <svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[20px] text-center my-auto font-extrabold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                    </h1>
                    <h1 className="my-auto font-semibold text-[18px] text-gray-500">(11025)</h1>
                </div>
                <div className="flex mt-4  justify-between w-[65%] md:w-[100%]">
                    <h1 className="flex  font-extrabold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        1000
                    </h1>
                    <h1 className="font-medium line-through text-gray-500">
                    1100</h1>
                    <h1 className="font-bold text-green-600">65% off</h1>
                </div>
                <div className="flex  justify-between mt-2  ">
                    <h1 className="font-semibold  flex justify-between items-center w-[30%] ">Size
                        <h1 className="bg-slate-300  px-3 ">XL</h1>
                    </h1>
                    <div className="flex w-[30%] ">
                        <input className="border-2 border-gray-400 m-auto rounded-md w-12 h-[50px] text-center "/>
                        <div className="flex flex-col h-[50px] justify-between">
                        <button className="bg-slate-300 hover:bg-slate-400 hover:text-white border-2 border-gray-400 rounded-md w-6 h-6 text-center">+</button>
                        <button className="bg-slate-300 hover:bg-slate-400 hover:text-white border-2 border-gray-400 rounded-md w-6 h-6 text-center">-</button>
                        </div>
                    </div>
                </div>
            
            </div>
            
        </div>
        </>
        )
    }
        
export default CartCard