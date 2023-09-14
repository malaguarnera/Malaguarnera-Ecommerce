import ItemCount from "../../itemCount/ItemCount"


const ItemDetail = ({product}) => {
    
  const onAdd = ( count ) => {

    console.log('productos seleccionados',count)
    }

  return (
    <div className="row">
        <h2>detalle</h2>

        <div className="col">
            <img className="w-25" src={product.imageUrl} alt={product.nombre} />
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.stock}</p>
        </div>
        <div className="col">
            <ItemCount initial={1}stock={5} onAdd={onAdd} />
        </div>
    </div>
  )
}

export default ItemDetail
