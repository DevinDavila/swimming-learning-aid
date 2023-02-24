import './ResultBox.css';

function ResultBox(props) {
    return (
        <div className="result-box">
            <div className="result-box-table-row">
                <div className="result-box-table-cell">{props.DateOfAttempt}</div>
                <div className="result-box-table-cell">{props.ScoreOfAttempt}</div>
            </div>
        </div>
    );
}

export default ResultBox;
