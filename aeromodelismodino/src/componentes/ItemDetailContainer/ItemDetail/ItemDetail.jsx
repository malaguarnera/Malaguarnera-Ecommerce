

const ItemDetail = ({product}) => {

  return (
    <div className="row">

        <div className="col">
            <img className="w-25" src={product.imageUrl} alt={product.nombre} />
        </div>

    </div>
  )
}

export default ItemDetail
