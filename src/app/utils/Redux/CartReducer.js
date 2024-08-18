'use client'
const Products=[]

const CartReducer=(state=Products,action)=>{
    console.log(action)

    const {type,payload}=action
    switch(type){
        case "Add":return([...state,{...payload,qty:1}])
        case "QtyADD":
            return state.map(product =>
                product.product_id === payload
                    ? { ...product, qty: product.qty + 1 }
                    : product
            );
            case "QtyReduce":
            return state.map(product =>
                product.product_id === payload
                    ? { ...product, qty: product.qty - 1 }
                    : product
            );
        case "Del":
            const NewProducts=state.filter(product=>product.product_id!==payload)
            return(state=NewProducts)
        default: return state
    }
}

export default CartReducer