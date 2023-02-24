import React, { useEffect } from 'react';
import './AdminView.css';
import LearnerBox from '../../Components/LearnerBox/LearnerBox';
import Results from '../../Components/Results/Results';

function AdminView() {
    const [fetchedLearners, setFetchedLearners] = React.useState([]);
    const [results, setResults] = React.useState(false);
    const [fetchedLearner, setFetchedLearner] = React.useState({});

    useEffect(() => {
        handleFetchLearners();
    }, []);

    const handleFetchLearners = () => {
        fetch('http://localhost:5000/api/users/getAllLearners', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((Response) => Response.json())
            .then(data => {
                setFetchedLearners(data.users);
            });
    }

    const handleShowSelectedLearner = (learner) => {
        setResults(true);
        handleFetchLearner(learner);
    }
    const handleHideSelectedLearner = () => setResults(false);

    const handleFetchLearner = (learner) => {
        fetch(`http://localhost:5000/api/users/getLearnerById/${learner._id}`, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((Response) => Response.json())
            .then(data => {
                setFetchedLearner(data);
            });
    }

    return (
        <div className='view-container'>
            {!results ?
                <div className='view-sections-container'>
                    <div className='view-title-box'>
                        <div className='view-title-text'>Admin View</div>
                    </div>
                    <div className='line'></div>

                    <div className="Admin-view-main-table-row">
                        <div className="Admin-view-main-table-cell">First name</div>
                        <div className="Admin-view-main-table-cell">Surname</div>
                        <div className="Admin-view-main-table-cell">Date of birth</div>
                    </div>
                    {Array.isArray(fetchedLearners) ? fetchedLearners.map((learner) => (
                        <LearnerBox key={learner._id} Firstname={learner.first_name} Surname={learner.last_name} DOB={new Date(learner.date_of_birth).toLocaleDateString()} onClick={() => handleShowSelectedLearner(learner)} />
                    )) : null}
                </div>
                :
                <>
                    {Object.keys(fetchedLearner).length > 0 ?
                        <Results key={fetchedLearner._id} FirstName={fetchedLearner.first_name} LastName={fetchedLearner.last_name} learnerId={fetchedLearner._id} clickHideResults={handleHideSelectedLearner} />
                        : null}
                </>
            }
            {/* <ResultsByStage /> */}
        </div>
    );
}

export default AdminView;
