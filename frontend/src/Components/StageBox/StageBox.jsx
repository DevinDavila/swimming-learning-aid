import './StageBox.css';

function StageBox(props) {
    return (
        <div>
            <div class="stage-box">
                <div class="stage-text" style={{ color: props.color }}>{props.name}</div>
            </div>
        </div>
    );
}

export default StageBox;