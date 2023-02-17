import './Answer.css';

function Answer(props) {
    return (
        <div className="answer-box" onClick={props.onClick}>{props.answer}</div>
    );
}

export default Answer;
