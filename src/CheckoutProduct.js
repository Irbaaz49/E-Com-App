import React from 'react';
import './checkoutProduct.css'
import { useStateValue } from "./StateProvider";
import swal from "sweetalert"

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        swal({
            title: "Product has been removed from the cart.",
            icon: "error",
            button : false,
            dangerMode: true,
            timer: 1000,
          })
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }




    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}

            </div>
        </div>
    )
}

export default CheckoutProduct