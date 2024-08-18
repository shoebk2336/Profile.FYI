'use client';
import { useSelector } from "react-redux"

import CartCard from "../Components/CartCard"
import Navbar from "../Components/Navbar"
import PaymentCard from "../Components/PaymentCard"



const Cart=()=>{
    const CartProducts=useSelector(state=>state?.CartReducer)
    console.log(CartProducts)

    return(
        <>
        <Navbar/>
        {CartProducts?.map((product)=><CartCard Data={product}/>)}
        <PaymentCard/>
        </>
    )
}

export default Cart