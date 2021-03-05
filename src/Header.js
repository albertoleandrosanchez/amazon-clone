import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import  ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {

    const[{basket, user},dispatch] = useStateValue();
    //{basket} esta puesto asi porque le estoy sacando el basket directamente del state que deberia ir ahi

    const handleAuthentication = () =>{
        auth.signOut()
    }

    return (
        <div className="header">
            
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt=""/>
            </Link>
            <div className="header__search">
                <input className="header__searchInput"
                 type="text"
                 placeholder="Ingrese su busqueda aqui..."
                 />
                 <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                {/* si no hay un user, solo ahi nos llevara al login */}
                <Link to={!user && "/login"}>
                <div className="header__option" onClick={handleAuthentication}>
                    <span className="header__optionLineOne">Bienvenido visitante</span>
                    <span className="header__optionLineTwo">{ user?
                    'Deslogearse':'Logearse' }</span>
                </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Devoluciones</span>
                    <span className="header__optionLineTwo">y pedidos</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Header