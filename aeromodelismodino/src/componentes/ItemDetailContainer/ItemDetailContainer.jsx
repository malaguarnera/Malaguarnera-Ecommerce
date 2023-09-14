import { useEffect } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { mfetch } from "../../utils/mockFetch"


const ItemDetailContainer = () => {

//LLAMADA A API

useEffect(() => {
//aca se llama a la api

mfetch(2
    )
.then(resp => console.log(resp))

},[])
///como tiene que ser usado 1 sola vez se agrega el array de dependencias luego que renderize el return.
  return (
    <div>

      <ItemDetail/>

    </div>
  )
}

export default ItemDetailContainer
