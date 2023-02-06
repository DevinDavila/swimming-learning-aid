import './Logo.css';
import logoImg from '../../images/SE-Logo-RGB.png'

function Logo() {
    return (
        <div className='logo'>
            <img src={logoImg} alt="SE-logo-icon" class="logo-picture" />
            <div class="logo-text">
                <div class="logo-blue-text">Swimming</div>
                <div class="logo-red-text">Learning</div>
                <div class="logo-red-text">Aid</div>
            </div>
        </div>
    );
}

export default Logo;
