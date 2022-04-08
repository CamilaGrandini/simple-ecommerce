import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../CartContext";
import { AiFillShopping } from "react-icons/ai";
import "../css/styles.css";

function Nav() {
  const { items } = useContext(CartContext);
  return (
    <nav className="header">
      <ul>
        <li className="menu-item">
          <div className="products">
          <Link to="/">Products</Link>
          </div>
        </li>

        <li className="menu-item">
          <Link to="/checkout">
            <div className="cart">
              <AiFillShopping />
              <span>{items.length}</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
