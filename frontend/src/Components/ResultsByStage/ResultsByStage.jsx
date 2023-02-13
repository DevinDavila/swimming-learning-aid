import './ResultsByStage.css';

function Results() {
    return (
        <div className='results-container'>
            <div className='results-section'>

                <div className='results-top-section'>
                    <div className='results-title-box'>
                        <div className='results-title-text'> Results </div>
                    </div>
                    <div className='stage-text-box'>
                        <div className='stage-text'> Stage X </div>
                    </div>                
                </div>
                
                <div className='line'></div>
                
                <div className='results-middle-section'>
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

export default Results;