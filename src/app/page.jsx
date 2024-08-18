'use client'
import { useEffect, useState } from "react";
import ProductCard from "./Components/Card";
import Navbar from "./Components/Navbar";
import ApiCall from "./utils/RestApi";

export default function Home() {
  const [Data,setData]=useState()
  console.log({Data})

  useEffect(()=>{
    ApiCall().then((result)=>setData(result))
  },[])
  return (
    <>
    <Navbar/>
    <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 ">
    {Data?.map((product)=><ProductCard data={product} key={Data?.id}/>)}
    </div>
    
    </>
  );
}
