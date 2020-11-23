import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';



export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5 ">
{/*                 
                        https://www.iconfinder.com/icons/1243689/call_phone_icon
                        Creative Commons (Attribution 3.0 Unported);
                        https://www.iconfinder.com/Makoto_msk  */}
                
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Products</Link>
                    </li>

                </ul>
                

            </nav>
        )
    }
}