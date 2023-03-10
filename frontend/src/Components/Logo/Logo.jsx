import './Logo.css';
import logoImg from '../../images/SE-Logo-RGB.png'
import { Link } from 'react-router-dom';


function Logo() {
    return (
        <Link className="logo" to="/">
            <img src={logoImg} alt="SE-logo-icon" className="logo-picture" />
            <div className="logo-text">
                <div className="logo-blue-text">Swimming</div>
                <div className="logo-red-text">Learning</div>
                <div className="logo-red-text">Aid</div>
            </div>
        </Link>
    );
}

export default Logo;
