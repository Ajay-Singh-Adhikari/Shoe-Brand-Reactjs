import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

const Cart = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <CartSummary />
      </div>
    </main>
  );
};
export default Cart;
