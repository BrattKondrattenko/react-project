import CartItemInterface from "../../Interfaces";
import './styles.css';

const GoodItem = (props: CartItemInterface) => {
  const {goodName, quantity, addInfo} = props;
  return ( 
    <div className="good">
      <p className="good__title">{`Товар: ${goodName}`}</p>
      <p className="good__quantity">{`Количество: ${quantity}`}</p>
      <p className="good__description">{addInfo}</p>
    </div>
   );
}
 
export default GoodItem;