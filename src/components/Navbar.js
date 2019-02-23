import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/cart-logo.JPG';
 
export default class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-sg navbar-dark bg-dark">
                <Link to='/'>
                <i class="fas fa-phone-square"></i>
                </Link>   
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                      <Link to="/" className="nav-link">
                      Products</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                  <button>
                      <span>
                        <i className="fas fa-cart-plus" />my cart
                      </span>
                     
                     </button>
                </Link>            
             </nav>
        )
    }
}

