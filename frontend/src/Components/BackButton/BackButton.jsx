import './BackButton.css';
import { Link } from 'react-router-dom';

function BackButton() {
    return (
        <div className='learner-back-button-container'>
            <Link className="learner-back-button" to="/">Back to decision page</Link>
        </div>
    );
}

export default BackButton;
