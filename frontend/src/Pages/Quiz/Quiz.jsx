import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Answer from '../../Components/Answer/Answer';
import Logo from '../../Components/Logo/Logo';
import Question from '../../Components/Question/Question';
import QuizResults from "../../Components/QuizResults/QuizResults";
import './Quiz.css';

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [complete, setComplete] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const navigate = useNavigate();
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
                'x-access-token': sessionStorage.getItem('token')
            }
        })
            .then((Response) => Response.json())
            .then(data => {
                const questionsToDisplay = data.sort(() => Math.random() - 0.5).slice(0, 10);

                questionsToDisplay.forEach((question) => {
                    fetch(`http://localhost:5000/api/answers/answersByQuestionId/${question._id}`, {
                        method: 'get',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'x-access-token': sessionStorage.getItem('token')
                        }
                    })
                        .then((response) => response.json())
                        .then((answers) => {
                            const randomiseAnswers = answers.sort(() => Math.random() - 0.5);
                            question.answers = randomiseAnswers;

                            setQuestions(questionsToDisplay);
                        });
                });
            });
    }

    const handleAnswerSelect = (correctAnswer) => {
        if (correctAnswer)
            setCorrectAnswers(correctAnswers + 1);

        // If currectQuestion is equal to the last question in the array
        if (currentQuestion === 9) {
            setTimeout(() => {
                setComplete(true);
            }, 1000);
        } else {
            setTimeout(() => {
                setCurrentQuestion(currentQuestion + 1);
            }, 1000);
        }
    }

    const handleBackToStages = () => {
        navigate('/stages');
    }

    return (
        <div className='quiz-container'>
            {!complete ?
                <>
                    <div className="quiz-top-section">
                        <Logo />
                        <div className="quiz-option-container">
                            <div className="quiz-back-container" onClick={handleBackToStages}>Back home</div>
                            <div className="quiz-results-container">Results</div>
                            <div className="quiz-account-container">Account</div>
                        </div>
                    </div>
                    <div className="main-container">
                        {Array.isArray(questions) && questions.length > 0 ?
                            <div>
                                <Question question={questions[currentQuestion].value} image="This is an image" />
                                <div className="answer-container">
                                    {Array.isArray(questions[currentQuestion].answers) ? questions[currentQuestion].answers.map((answer, index) => (
                                        <Answer
                                            key={index}
                                            answer={answer.value}
                                            isCorrect={answer.correct}
                                            onClick={() => handleAnswerSelect(answer.correct)}
                                        />
                                    )) : null}
                                </div>
                            </div>
                            : null
                        }
                    </div>
                </> :
                <div><QuizResults stage={stage} correctAnswers={correctAnswers} /></div>}
        </div>
    );
}

export default Quiz;
