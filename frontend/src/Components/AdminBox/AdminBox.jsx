import './AdminBox.css';

function AdminBox(props) {
    return (
        <div className="Admin-box">
            <div className="Admin-table-row">
                <div className="Admin-table-cell">{props.Firstname}</div>
                <div className="Admin-table-cell">{props.Surname}</div>
                <div className="Admin-table-cell">{props.EmailAddress}</div>
                <div className="Admin-table-cell">
                    <button className="btn btn-success admin-button" onClick={props.clickGreen}>&#10003;</button> 
                    <button className="btn btn-danger admin-button" onClick={props.clickRed}>&#88;</button> 
                </div>
            </div>
        </div>
    );
}

export default AdminBox;
