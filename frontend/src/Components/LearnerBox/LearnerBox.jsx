import './LearnerBox.css';

function LearnerBox(props) {
    return (
        <div>
            <div className="Learner-box">
                <div className="table-row">
                    <div className="table-cell">{props.Firstname}</div>
                    <div className="table-cell">{props.Surname}</div>
                    <div className="table-cell">{props.DOB}</div>
                </div>
            </div>
        </div>
    );
}

export default LearnerBox;
