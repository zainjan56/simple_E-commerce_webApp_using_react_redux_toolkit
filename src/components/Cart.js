import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div>
      <h2 className="cartsPage">My Shopping Cart</h2><br></br>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              image: item.image,
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cart;