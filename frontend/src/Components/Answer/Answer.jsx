import { useState } from 'react';
import './Answer.css';

function Answer(props) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        props.onClick();
        setTimeout(() => {
            setClicked(false);
        }, 1000);
    };

    let styleClass = 'answer-box';
    if (clicked) {
        if (props.isCorrect) {
            styleClass += ' correct';
        } else {
            styleClass += ' wrong';
        }
    }

    return (
        <div className={styleClass} onClick={handleClick}>
            {props.answer}
        </div>
    );
}

export default Answer;