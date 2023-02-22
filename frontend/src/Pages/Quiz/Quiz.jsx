import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Answer from '../../Components/Answer/Answer';
import Logo from '../../Components/Logo/Logo';
import Question from '../../Components/Question/Question';
import './Quiz.css';

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);

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
                const questionsToDisplay = data.sort(() => Math.random() - 0.5).slice(0, 4);

                questionsToDisplay.forEach((question) => {
                    fetch(`http://localhost:5000/api/answers/answersByQuestionId/${question._id}`, {
                        method: 'get',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        }
                    })
                        .then((response) => response.json())
                        .then((answers) => {
                            question.answers = answers;

                            setQuestions(questionsToDisplay);
                        });
                });
            });
    }

    const handleAnswerSelect = (correctAnswer) => {
        if (correctAnswer)
            console.log("Correct Answer")
        else
            console.log("Wrong Answer")

        if (currentQuestion === 3) {
            console.log('END OF QUIZ!')
        } else {
            setTimeout(() => {
                setCurrentQuestion(currentQuestion + 1);
            }, 1000);
        }
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
                            {/* <Answer
                                answer={questions[currentQuestion].answers[0].value}
                                isCorrect={questions[currentQuestion].answers[0].correct}
                                onClick={() => handleAnswerSelect(questions[currentQuestion].answers[0].correct)}
                            />
                            <Answer
                                answer={questions[currentQuestion].answers[1].value}
                                isCorrect={questions[currentQuestion].answers[1].correct}
                                onClick={() => handleAnswerSelect(questions[currentQuestion].answers[1].correct)}
                            />
                            <Answer
                                answer={questions[currentQuestion].answers[2].value}
                                isCorrect={questions[currentQuestion].answers[2].correct}
                                onClick={() => handleAnswerSelect(questions[currentQuestion].answers[2].correct)}
                            />
                            <Answer
                                answer={questions[currentQuestion].answers[3].value}
                                isCorrect={questions[currentQuestion].answers[3].correct}
                                onClick={() => handleAnswerSelect(questions[currentQuestion].answers[3].correct)}
                            /> */}
                        </div>
                    </div>
                    : null
                }
            </div>
        </div>
    );
}

export default Quiz;
