import './QuizResults.css';

function QuizResults() {

    const QuizScore = 9;
    const Percentage = Math.floor((QuizScore/15) *100);

    return (
        <div className='quiz-result-container'>
            <div className='quiz-result-sections-container'>
                <div className='quiz-result-title-box'>
                    <div className='quiz-stage-text'>Stage X Quiz</div>
                    <div className='line'></div>
                    <div className='quiz-result-text'>Your score: {QuizScore}/15 ({Percentage}%)</div>
                    <div className='quiz-result-text'>Pass mark: 10/15 (66%)</div>
                </div>

                <div className='response-box'>
                    {QuizScore > 9 ?
                        <div className='quiz-response-text'>
                            Congratulations, you have passed this quiz and are ready to move on.
                        </div>
                    :
                    <>
                        {/* If score is 9 or less */}
                        <div className='quiz-response-text'>
                            Unfortunately, you have failed this test, give it another go!
                        </div>
                    </>
                    }
                </div>
                
                <button className="btn btn-secondary return-button"> Return to Stages page</button> 

            </div>
        </div>
    );
}

export default QuizResults;
