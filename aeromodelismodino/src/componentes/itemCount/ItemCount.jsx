
import { useCounter } from "../hooks/useCounter"




const ItemCount = ({initial, stock, onAdd}) => {

    const{ count,handleAdd,handleSubstrack } = useCounter(initial, stock)

  return (
    <center>
        <div>
            <h2>Counter</h2>
            <button onClick={handleAdd}> + 1 </button>
            <label>
                <strong>{ count }</strong>
            </label>
            <button onClick={handleSubstrack}> - 1 </button>
            <button onClick={()=> onAdd(count )}> Agregar al Carrito </button>


        </div>
    </center>
  )
}

export default ItemCount
