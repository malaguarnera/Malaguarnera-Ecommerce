import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { mfetch } from "../../utils/mockFetch"


const ItemDetailContainer = () => {

    const [product,setProduct] = useState({})

//LLAMADA A API

const productId = 3;

useEffect(() => {
  mfetch(productId)
    .then(resp => setProduct(resp))
    .catch(err => console.log(err))
}, [productId]);

///como tiene que ser usado 1 sola vez se agrega el array de dependencias luego que renderize el return.
  return (
    <div>

      <ItemDetail product={product}/>

    </div>
  )
}

export default ItemDetailContainer
