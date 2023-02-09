import './Home.css';
import { Link } from 'react-router-dom';
import penImg from '../../images/pen-icon.png'
import swimImg from '../../images/swimming-icon.png'

function Home() {
    return (
        <div className='login-container'>
            <div class="login-sections-container">
                <Link class="login-sections-link" to="/admin">
                    <div class="login-left-section">
                        <div class="login-left-section-title">I am an Admin</div>
                        <div class="login-left-section-image-container">
                            <img src={penImg} alt="pen-icon" class="login-left-section-image" />
                        </div>
                        <text class="login-left-section-text">For instructors and assistants ONLY</text>
                        <text class="login-left-section-text">Be able to track your Learners’ progress and
                            figure out their strengths and weaknesses</text>
                    </div>
                </Link>
                <Link class="login-sections-link" to="/learner">
                    <div class="login-right-section">
                        <div class="login-right-section-title">I am a Learner</div>
                        <div class="login-right-section-image-container">
                            <img src={swimImg} alt="swimming-icon" class="login-right-section-image" />
                        </div>
                        <text class="login-right-section-text">Gain access to a variety of quizzes and information
                            to benefit you and your swimming career</text>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;
