import './StageResultsBox.css';

function StageResultsBox(props) {
    return (
        <div className="stage-results-box-container" onClick={props.onClick}>
            <div className="stage-results-box-table-row">
                <div className="stage-results-box-table-cell">{props.stage}</div>
                <div className="stage-results-box-table-cell">{props.attempts}</div>
                <div className="stage-results-box-table-cell">{props.highestScore}</div>
            </div>
        </div>
    );
}

export default StageResultsBox;
