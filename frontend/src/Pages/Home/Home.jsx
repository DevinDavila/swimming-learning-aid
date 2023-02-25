import './Home.css';
import { Link } from 'react-router-dom';
import penImg from '../../images/pen-icon.png'
import swimImg from '../../images/swimming-icon.png'
import QuizResults from '../../Components/QuizResults/QuizResults';

function Home() {
    return (
        <div className='login-container'>
            <div className="login-sections-container">
                <Link className="login-sections-link" to="/admin">
                    <div className="login-left-section">
                        <div className="login-left-section-title">I am an Admin</div>
                        <div className="login-left-section-image-container">
                            <img src={penImg} alt="pen-icon" className="login-left-section-image" />
                        </div>
                        <text className="login-left-section-text">For instructors and assistants ONLY</text>
                        <text className="login-left-section-text">Be able to track your Learners’ progress and
                            figure out their strengths and weaknesses</text>
                    </div>
                </Link>
                <Link className="login-sections-link" to="/learner">
                    <div className="login-right-section">
                        <div className="login-right-section-title">I am a Learner</div>
                        <div className="login-right-section-image-container">
                            <img src={swimImg} alt="swimming-icon" className="login-right-section-image" />
                        </div>
                        <text className="login-right-section-text">Gain access to a variety of quizzes and information
                            to benefit you and your swimming career</text>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;
