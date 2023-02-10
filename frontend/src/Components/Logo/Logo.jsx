import './Logo.css';
import logoImg from '../../images/SE-Logo-RGB.png'

function Logo() {
    return (
        <div className='logo'>
            <img src={logoImg} alt="SE-logo-icon" className="logo-picture" />
            <div className="logo-text">
                <div className="logo-blue-text">Swimming</div>
                <div className="logo-red-text">Learning</div>
                <div className="logo-red-text">Aid</div>
            </div>
        </div>
    );
}

export default Logo;
