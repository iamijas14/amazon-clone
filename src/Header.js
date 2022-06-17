import "./header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";
import { useDatalayer } from "./DataLayerProvider";
import { auth } from './firebase';

const Header = () => {

    const handleSingInSignOut = () => {
        if(user) {
        auth.signOut();
        }
    }

    const [ { basket, user } ] = useDatalayer();

  return (
    <div className="header">
            <Link to="/">
                <img
                className="header_logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="amazon-logo"
            />
            </Link>

        <div className="header_delivery">
            <p>Deliver to {user?.email.split("@", 1)} </p>
            <p><LocationOnIcon /><strong>Bengaluru 560039</strong></p>
        </div>

        <div className="header_search">
            <input 
            className="header_searchInput"
            type="text" />
            <SearchIcon className="header_searchIcon"/>
        </div>

        <div className="header_nav">

            <Link to={!user && "/login"}>
                <div className="header_option">
                    <span className="header_optionOne">
                        Hello, {user ? user?.email.split("@", 1) : 'Guest'}
                    </span>
                    <span 
                    onClick={handleSingInSignOut}
                    className="header_optiontwo">
                        {user ? 'Sign Out' : 'Sign In'}
                    </span>
            </div>
            </Link>

            <Link to="/orders">
                <div className="header_option">
                    <span className="header_optionOne">
                        Returns
                    </span>
                    <span className="header_optiontwo">
                        & orders
                    </span>
                </div>
            </Link>

            <div className="header_option">
                <span className="header_optionOne">
                    your 
                </span>
                <span className="header_optiontwo">
                    Prime
                </span>
            </div>
                
            <Link to="/checkout">
                <div className="header_cart" >
                    <ShoppingCartIcon />
                    <span className="header_optionTwo header_cartCount">
                    {basket?.length}
                    </span>
                </div>
            </Link> 
        </div>
    </div>
  )
}

export default Header;