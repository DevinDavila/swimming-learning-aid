import Answer from '../../Components/Answer/Answer';
import Logo from '../../Components/Logo/Logo';
import Question from '../../Components/Question/Question';
import './Quiz.css';

function Quiz() {
    return (
        <div className='quiz-container'>
            <div class="quiz-top-section">
                <Logo />
                <div class="option-container">
                    <div class="back-container">Back home</div>
                    <div class="results-container">Results</div>
                    <div class="account-container">Account</div>
                </div>
            </div>
            <div class="main-container">
                <Question question="This is a question" image="This is an image" />
                <div class="answer-container">
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
