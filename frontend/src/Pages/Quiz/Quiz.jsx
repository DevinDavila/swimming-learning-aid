import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Answer from '../../Components/Answer/Answer';
import Logo from '../../Components/Logo/Logo';
import Question from '../../Components/Question/Question';
import './Quiz.css';

function Quiz() {
    const [questions, setQuestions] = useState([]);

    const { state } = useLocation();
    const { stage } = state;

    useEffect(() => {
        handleFetchquestions();
    }, []);

    const handleFetchquestions = () => {
        fetch(`http://localhost:5000/api/questions/questionsByStage/${stage}`, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((Response) => Response.json())
            .then(data => {
                setQuestions(data.sort(() => Math.random() - 0.5).slice(0, 2));
            });
    }

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
            {Array.isArray(questions) && questions.length >= 2 ?
                <Question question={questions[1].value} image="This is an image" /> : null}
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
