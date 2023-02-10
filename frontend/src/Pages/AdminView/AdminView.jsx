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
                <LearnerBox Firstname="Blaaaaaa" />
                <LearnerBox name="Blaaaaaa" />
                <LearnerBox name="Blaaaaaa" />
            </div>
        </div>
    );
}

export default AdminView;
