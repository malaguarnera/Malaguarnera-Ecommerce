import { useEffect, useState } from "react"
import { mfetch } from "../../utils/mockFetch"
import { ItemList } from "../ItemList/ItemList"



export const ItemListContainer = () => {
  const [products,setProduct] = useState([])
  const [loading,setLoading] = useState(true)
    
  useEffect(() =>{
    mfetch()
    .then(res=> setProduct(res) )
    .finally(() => setLoading(false))
    


  },[])
  console.log(products)
  
  return (
    <center>
      <div className="row">
          { loading ?<h2>loading...</h2>
              
              :
              <ItemList products ={products}/>
          }
     </div>
    </center>
  )
}


