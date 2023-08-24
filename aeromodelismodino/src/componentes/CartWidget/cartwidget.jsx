import './CartWidget.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
  return (
    <div className='iconCarrito'>
        3
      <FontAwesomeIcon icon={faCartShopping} />
    </div>
  );
}

export default CartWidget
