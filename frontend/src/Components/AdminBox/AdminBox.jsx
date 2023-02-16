import './AdminBox.css';

function AdminBox(props) {
    return (
        <div className="Admin-box">
            <div className="Admin-table-row">
                <div className="Admin-table-cell">{props.Firstname}</div>
                <div className="Admin-table-cell">{props.Surname}</div>
                <div className="Admin-table-cell">{props.EmailAddress}</div>
                <div className="Admin-table-cell">
                    <button className="btn btn-success  admin-button">&#10003;</button> 
                    <button className="btn btn-danger  admin-button">&#88;</button> 
                </div>
            </div>
        </div>
    );
}

export default AdminBox;
