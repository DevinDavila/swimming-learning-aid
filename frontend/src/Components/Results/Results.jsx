import React, { useEffect } from 'react';
import './Results.css';
import StageResultsBox from '../StageResultsBox/StageResultsBox';

function Results(props) {
    const [fetchedResults, setFetchedResults] = React.useState([]);
    const [stageResults, setStageResults] = React.useState(false);

    useEffect(() => {
        handleFetchScoresByStage();
    }, []);

    const handleFetchScoresByStage = () => {
        var stagesArray = [];

        const fetchPromises = [];
        for (let stage = 1; stage < 8; stage++) {
            fetchPromises.push(fetch(`http://localhost:5000/api/scores/scoresByLearnerIdByStage/${props.learnerId}/${stage}`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }))
        }

        Promise.all(fetchPromises)
            .then((responses) => Promise.all(responses.map((response) => response.json())))
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    const highestScore = data[i].reduce((acc, curr) => {
                        return curr.score > acc ? curr.score : acc;
                    }, 0);
                    stagesArray.push({
                        results: data[i],
                        attempts: data[i].length,
                        stage: i + 1,
                        highestScore: highestScore
                    });
                }
                setFetchedResults(stagesArray);
            })
    }

    const handleShowSelectedStage = (stage) => {
        setStageResults(true);
        // handleFetchLearner(learner);
    }
    const handleHideSelectedStage = () => setStageResults(false);

    return (
        <div className='results-page-container'>
            {!stageResults ?
            <div className='results-table'>
                <div className='results-title-box'>
                    <div className='results-title-text'>Results for {props.FirstName} {props.LastName}</div>
                    <div onClick={props.clickHideResults} className='results-title-x'>&#10005;</div>
                </div>
                <div className='results-line'></div>
                <div className="results-main-table-row">
                    <div className="results-main-table-cell">Stage</div>
                    <div className="results-main-table-cell">Attempts</div>
                    <div className="results-main-table-cell">Highest Score</div>
                </div>
                {Array.isArray(fetchedResults) ? fetchedResults.map((result) => (
                    <StageResultsBox key={result.stage} stage={result.stage} attempts={result.attempts} highestScore={result.highestScore} onClick={() => handleShowSelectedStage(result.stage)} />
                )) : <div>NOTHING</div>}
            </div>
            :
            <div>RESULTS BY STAGE</div>}
        </div>
    );
}

export default Results;