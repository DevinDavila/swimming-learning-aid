import './AdminView.css';
import LearnerBox from '../../Components/LearnerBox/LearnerBox';

function AdminView() {
    return (
        <div className='view-container'>
            <div className='view-sections-container'>
                <div className='view-title-box'>
                    <div className='view-title-text'>Admin View</div>
                </div>
                <div className='line'></div>

                <div className="main-table-row">
                    <div className="main-table-cell">First name</div>
                    <div className="main-table-cell">Surname</div>
                    <div className="main-table-cell">Date of birth</div>
                </div>
                <LearnerBox Firstname="Blaaaaaa" Surname="yay" DOB="12/12/2002"/>
                <LearnerBox Firstname="Blaaaaaa" Surname="yay" DOB="12/12/2002"/>
            </div>
        </div>
    );
}

export default AdminView;
