import './BackButton.css';
import { Link } from 'react-router-dom';

function BackButton() {
    return (
        <div className='back-button-container'>
            <Link className="back-button" to="/">Back to decision page</Link>
        </div>
    );
}

export default BackButton;
