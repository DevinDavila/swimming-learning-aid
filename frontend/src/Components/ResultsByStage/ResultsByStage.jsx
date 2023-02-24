import './ResultsByStage.css';
import ResultBox from '../../Components/ResultBox/ResultBox';

function ResultsByStage() {
    return (
        <div className='results-by-stage-container'>
            <div className='results-by-stage-section'>
                <div className='results-by-stage-title-box'>
                    <div className='results-by-stage-title-text'> Results for Stage X</div>
                </div>  
                <div className='line'></div>

                <div className="results-by-stage-main-table-row">
                    <div className="results-by-stage-main-table-cell">Date of attempt</div>
                    <div className="results-by-stage-main-table-cell">Score</div>
                </div>

                <ResultBox DateOfAttempt={"27/06/2005"} ScoreOfAttempt={100000}/>
                <ResultBox DateOfAttempt={"69/06/2005"} ScoreOfAttempt={69}/>
            </div>
        </div>
    );
}

export default ResultsByStage;