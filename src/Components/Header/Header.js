
import React from 'react';
import { Fragment } from 'react';
import logo from './eshop-logo.png';
import './header.css';

const Header = () => {
    return (
        <Fragment>
            <div className="header my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img className="logo" src={ logo } alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <nav className="menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul>
                                <li>Shop</li>
                                <li>Blog</li>
                                <li>Service</li>
                                <li>About us</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
};

export default Header;
