import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
const CartWidget = () => {
    return (
        
      <div className="fa-2x icono">
       <span className='fa-layers fa-fw'>
            <FontAwesomeIcon icon={faCartShopping} /> 
                <span class="fa-layers-counter">0</span>
        </span>

      </div>
    );
  }
  export default CartWidget;