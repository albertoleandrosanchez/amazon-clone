import { useStateValue } from './StateProvider';
import "./Product.css"
import StarRateIcon from '@material-ui/icons/StarRate';

function Product({id, price,title,image,rating}) {
   
    const [{basket}, dispatch] = useStateValue();
    //dispatch seria un setBasket
    //    estado y setEstado

    const addToBasket = () => {
        //agrega el producto al data layer(reducer.js)
       
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                image: image,
                price:price,
                rating: rating,
                title: title,
            }
        });
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) =>(
                       <StarRateIcon style={{ fontSize: 25, color: 'gold'}} /> 
    ))}
                    
                </div>
            </div>
            <img src={image} alt=""/>    
            <button onClick={addToBasket}>Agregar Al Carrito</button>
            
        </div>
    )
}

export default Product
