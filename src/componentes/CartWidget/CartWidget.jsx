import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';

const CartWidget = () => {

  const {counter} = useContext(cartContext);

  return (
    <div className="fa-2x icono">
          <span className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faCartShopping}/>
              <span className="fa-layers-counter">{counter}</span>
          </span>
          </div>
  )
  }
  export default CartWidget;