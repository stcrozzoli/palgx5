import logo from '../../imgs/logo.png';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className='divlogo'>
            <img alt='logo' src={logo}></img>
            <div className='divBotones'>

                <Link className='button' to="/">Pass Generator</Link>
                <Link className='button' to="/logs">Logs Generator</Link>
            </div>

            <p className="mark">by stcrozzoli💫</p>
        </div>
        
    )
}

export default Header