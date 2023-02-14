import './Results.css';
import LearnerBox from '../../Components/LearnerBox/LearnerBox';

function Results(props) {
    return (
        <div className='results-page-container'>
            <div className='results-table'>
                <div className='results-title-box'>
                    <div className='results-title-text'>Results for {props.FirstName} {props.LastName}</div>
                    <div onClick={props.clickHideResults} className='results-title-x'>&#10005;</div>
                </div>
                <div className='results-line'></div>
                <div className="results-main-table-row">
                    <div className="results-main-table-cell">Stage</div>
                    <div className="results-main-table-cell">Attempts</div>
                    <div className="results-main-table-cell">Heighest Score</div>
                </div>
                {/* <LearnerBox Firstname="1" Surname="5" DOB="3" onClick={() => handleShowSelectedLearnerStage(learner)} />
                <LearnerBox Firstname="2" Surname="3" DOB="7" onClick={() => handleShowSelectedLearnerStage(learner)} />
                <LearnerBox Firstname="3" Surname="5" DOB="10" onClick={() => handleShowSelectedLearnerStage(learner)} />
                <LearnerBox Firstname="4" Surname="2" DOB="8" onClick={() => handleShowSelectedLearnerStage(learner)} />
                <LearnerBox Firstname="5" Surname="1" DOB="3" onClick={() => handleShowSelectedLearnerStage(learner)} />
                <LearnerBox Firstname="6" Surname="7" DOB="2" onClick={() => handleShowSelectedLearnerStage(learner)} />
                <LearnerBox Firstname="7" Surname="1" DOB="7" onClick={() => handleShowSelectedLearnerStage(learner)} /> */}
            </div>
        </div>
    );
}

export default Results;