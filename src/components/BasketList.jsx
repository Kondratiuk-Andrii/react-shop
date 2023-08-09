import { BasketItem } from "./BasketItem";

export const BasketList = (props) => {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

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
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        {...item}
                    />
                ))
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
