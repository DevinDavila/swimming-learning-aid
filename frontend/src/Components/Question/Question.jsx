import './Question.css';

function Question(props) {
    return (
        <div class="question-container">
            <div class="question-box">{props.question}</div>
            <div class="question-image-box">{props.image}</div>
        </div>
    );
}

export default Question;
