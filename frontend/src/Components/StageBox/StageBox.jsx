import './StageBox.css';

function StageBox(props) {
    return (
        <div>
            <div className="stage-box">
                <div className="stage-text" style={{ color: props.color }}>{props.name}</div>
            </div>
        </div>
    );
}

export default StageBox;
