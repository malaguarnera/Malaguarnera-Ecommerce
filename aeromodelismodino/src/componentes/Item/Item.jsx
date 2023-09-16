import { Link } from "react-router-dom";




export const Item = ({ product }) => {
    return (
      <div className="card w-25">
        <div className="card-body">
          <img className="w-10 card-img-top" src={product.imageUrl} alt="imagen avion" />
          <p>precio {product.price}</p>
          <p>descripcion {product.description}</p>
          <Link to ='/detalle'>
             <button>detalle</button>
          </Link> 
        </div>
      </div>
    );
  }
  