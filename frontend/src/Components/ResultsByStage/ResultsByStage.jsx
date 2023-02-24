import './ResultsByStage.css';
import ResultBox from '../../Components/ResultBox/ResultBox';
import React, { useEffect } from 'react';

function ResultsByStage(props) {
    const [fetchedResults, setFetchedResults] = React.useState([]);

    useEffect(() => {
        handleFetchScoresByStage();
    }, []);

    const handleFetchScoresByStage = () => {
        fetch(`http://localhost:5000/api/scores/scoresByLearnerIdByStage/${props.learnerId}/${props.stage}`, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((Response) => Response.json())
            .then(data => {
                const sortedResults = data.sort((a, b) => new Date(b.date_time) - new Date(a.date_time));
                setFetchedResults(sortedResults);
            });
    }

    return (
        <div className='results-by-stage-container'>
            <div className='results-by-stage-section'>
                <div className='results-by-stage-title-box'>
                    <div className='results-by-stage-title-text'> Results for Stage</div>
                    <div onClick={props.clickHideResults} className='results-title-x'>&#10005;</div>
                </div>
                <div className='line'></div>

                <div className="results-by-stage-main-table-row">
                    <div className="results-by-stage-main-table-cell">Date of attempt</div>
                    <div className="results-by-stage-main-table-cell">Score</div>
                </div>
                {Array.isArray(fetchedResults) ? fetchedResults.map((result, index) => (
                    <ResultBox key={index} DateOfAttempt={new Date(result.date_time).toLocaleString()} ScoreOfAttempt={result.score} />
                )) : null}
            </div>
        </div>
    );
}

export default ResultsByStage;