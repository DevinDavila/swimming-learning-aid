import Answer from '../../Components/Answer/Answer';
import Logo from '../../Components/Logo/Logo';
import Question from '../../Components/Question/Question';
import './Quiz.css';

function Quiz() {
    return (
        <div className='quiz-container'>
            <div className="quiz-top-section">
                <Logo />
                <div className="option-container">
                    <div className="back-container">Back home</div>
                    <div className="results-container">Results</div>
                    <div className="account-container">Account</div>
                </div>
            </div>
            <div className="main-container">
                <Question question="This is a question" image="This is an image" />
                <div className="answer-container">
                    <Answer answer="Answer One" />
                    <Answer answer="Answer Two" />
                    <Answer answer="Answer Three" />
                    <Answer answer="Answer Four" />
                </div>
            </div>
        </div>
    );
}

export default Quiz;
