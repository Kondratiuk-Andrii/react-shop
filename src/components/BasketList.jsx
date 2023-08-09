import { BasketItem } from "./BasketItem";
import { useContext } from "react";
import { ShopContext } from "../context";

export const BasketList = (props) => {
    const { order = [], handleBasketShow = Function.prototype } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Basket</li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>
                close
            </i>
            {order.length ? (
                order.map((item) => <BasketItem key={item.id} {...item} />)
            ) : (
                <li className="collection-item">Basket is empty</li>
            )}
            <li className="collection-item active">
                <span className="total-price">Total price: {totalPrice} $</span>
            </li>
            <li className="collection-item active">
                <button className="btn checkout-btn green">Checkout</button>
            </li>
        </ul>
    );
};
