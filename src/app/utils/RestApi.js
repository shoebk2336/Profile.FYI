


const ApiCall=async()=>{

    const Fetch=await fetch('https://fake-store-api.mock.beeceptor.com/api/products')
    const Data=Fetch.json()
    return Data
}

export default ApiCall