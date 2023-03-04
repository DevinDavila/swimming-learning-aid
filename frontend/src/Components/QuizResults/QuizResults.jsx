import './QuizResults.css';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function QuizResults(props) {
    const navigate = useNavigate();

    useEffect(() => {
        handleSaveScore();
    }, []);

    const handleSaveScore = () => {
        fetch('http://localhost:5000/api/scores/add', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': sessionStorage.getItem('token')
            },
            body: JSON.stringify({
                user_id: sessionStorage.getItem("userId"),
                stage: props.stage,
                score: props.correctAnswers,
                date_time: new Date()
            })
        })
            .then((Response) => Response.json())
    }

    const handleBackToStages = () => {
        navigate('/stages');
    }

    let correctAnswers = props.correctAnswers;
    const Percentage = Math.floor((correctAnswers / 10) * 100);

    return (
        <div className='quiz-result-container'>
            <div className='quiz-result-sections-container'>
                <div className='quiz-result-title-box'>
                    <div className='quiz-stage-text'>Stage {props.stage} Quiz</div>
                    <div className='line'></div>
                    <div className='quiz-result-text'>Your score: {correctAnswers}/10 ({Percentage}%)</div>
                    <div className='quiz-result-text'>Pass mark: 7/10 (70%)</div>
                </div>

                <div className='response-box'>
                    {correctAnswers > 7 ?
                        <div className='quiz-response-text'>
                            Congratulations, you have passed this quiz and are ready to move on.
                        </div>
                        :
                        <div className='quiz-response-text'>
                            Unfortunately, you have failed this test, give it another go!
                        </div>
                    }
                </div>

                <button className="btn btn-secondary return-button" onClick={handleBackToStages}>Return to Stages page</button>

            </div>
        </div>
    );
}

export default QuizResults;
