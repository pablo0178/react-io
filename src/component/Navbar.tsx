import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FunctionComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper purple darken-3 px1">
            <a href="/React" className="brand-logo">React+Typescript</a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/React">Список дел</NavLink></li>
                <li><NavLink to="/about">О нас</NavLink></li>
            </ul>
            </div>
        </nav>
    );
}