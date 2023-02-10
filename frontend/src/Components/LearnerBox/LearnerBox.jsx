import './LearnerBox.css';

function LearnerBox(props) {
    return (
        <div>
            <div className="Learner-box">
                <div className="Learner-box-text">{props.name}</div>
            </div>
        </div>
    );
}

export default LearnerBox;
