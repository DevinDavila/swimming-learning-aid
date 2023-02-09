import './Question.css';

function Question(props) {
    return (
        <div className="question-container">
            <div className="question-box">{props.question}</div>
            <div className="question-image-box">{props.image}</div>
        </div>
    );
}

export default Question;
