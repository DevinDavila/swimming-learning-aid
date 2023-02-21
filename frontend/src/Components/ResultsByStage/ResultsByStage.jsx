import './ResultsByStage.css';

function ResultsByStage() {
    return (
        <div className='results-by-stage-container'>
            <div className='results-by-stage-section'>

                <div className='results-by-stage-top-section'>
                    <div className='results-by-stage-title-box'>
                        <div className='results-by-stage-title-text'> Results </div>
                    </div>
                    <div className='stage-text-box'>
                        <div className='stage-text'> Stage X </div>
                    </div>                
                </div>
                
                <div className='line'></div>
                
                <div className='results-by-stage-middle-section'>
                    <div className='progress-box'> Progress </div>

                    <div className='info-box1'>
                        <div className='attempts-box'> Attempts</div>
                        <div className='high-score-box'> High score </div>
                    </div>

                    <div className='info-box2'>
                        <div className='last-attempt-date-box'> Last attempt date </div>
                        <div className='last-attempt-score-box'> Last attempt score </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultsByStage;