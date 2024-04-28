import { NavLink } from 'react-router-dom';
import LogoKasa from '../../Images/LogoKasa.png';

import React, { useState } from 'react';

function Header(){

    const [activeLink, setActiveLink] = useState(null);

    const linkClick = (navItem) => {
        setActiveLink(navItem);
    };

    return(
        <header>
            <img src={LogoKasa} alt="logo Kasa"/> 
            <nav>
                <NavLink to="/" activeClassName="active" onClick={() => linkClick('Acceuil')}>Accueil</NavLink>
                <NavLink to="/a-propos" activeClassName="active" onClick={() => linkClick('A propos')}>A Propos</NavLink>
            </nav>
        </header>
    )
}

export default Header;