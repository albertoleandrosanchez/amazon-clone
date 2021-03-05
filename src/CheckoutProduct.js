import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
import StarRateIcon from '@material-ui/icons/StarRate';


function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket}, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkout__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_,i)=>( <StarRateIcon style={{ fontSize: 25 ,color: 'gold'}} /> ))}
                </div>
                <button onClick={removeFromBasket}>Eliminar Del Carrito</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
