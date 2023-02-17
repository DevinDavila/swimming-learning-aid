import './StageBox.css';

function StageBox(props) {
    return (
        <div className="stage-box" onClick={props.onClick}>
            <div className="stage-text" style={{ color: props.color }}>{props.name}</div>
        </div>
    );
}

export default StageBox;
