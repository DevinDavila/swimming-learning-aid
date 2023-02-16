import './AdminAuthorise.css';
import AdminBox from '../../Components/AdminBox/AdminBox';


function AdminAuthorise() {

    return (
        <div className='authorise-container'>
            <div className='authorise-sections-container'>
                <div className='authorise-title-box'>
                    <div className='authorise-title-text'>Admin View</div>
                </div>

                <div className='line'></div>

                <div className="authorise-main-table-row">
                    <div className="authorise-main-table-cell">First name</div>
                    <div className="authorise-main-table-cell">Surname</div>
                    <div className="authorise-main-table-cell">Email Address</div>
                    <div className="authorise-main-table-cell">Authorise</div>
                </div>
                <AdminBox Firstname="dev" Surname="dav" EmailAddress="da@da.da"/>
            </div>
        </div>
    );
}

export default AdminAuthorise;