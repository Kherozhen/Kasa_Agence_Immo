import { Link } from 'react-router-dom';
import LogoKasa from '../../Images/LogoKasa.png';


function Header(){
    return(
        <header className='header'>
            <img src={LogoKasa} alt="logo Kasa"/> 
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header;