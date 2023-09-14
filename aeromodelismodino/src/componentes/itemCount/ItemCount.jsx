
import { useState } from "react"






const ItemCount = ({initial, stock, onAdd}) => {
    const [Counter, setCounter] = useState(initial)


  const handleAdd = () => {
      if (Counter < stock){
          setCounter(Counter + 1)
      }
  }
  const handleSubstract = () => {
      if (Counter > initial){
        setCounter(Counter - 1)
    }
  }

  return (
    <center>
        <div>
            <h2>Counter</h2>
            <button onClick={handleAdd}> + 1 </button>
            <label>
                <strong>{ Counter }</strong>
            </label>
            <button onClick={handleSubstract}> - 1 </button>
            <button onClick={()=> onAdd(Counter)}> Agregar al Carrito </button>


        </div>
    </center>
  )
}

export default ItemCount
