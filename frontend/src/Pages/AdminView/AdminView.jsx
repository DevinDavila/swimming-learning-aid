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

                // Used to update state immediately.
                setFetchedLearners((state) => {
                    console.log(state);

                    return state;
                });
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
        .then (data => {
            setFetchedLearner(data);

            // Used to update state immediately.
            setFetchedLearner((state) => {
                console.log(state);
                
                return state;
            });
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

                    <div className="main-table-row">
                        <div className="main-table-cell">First name</div>
                        <div className="main-table-cell">Surname</div>
                        <div className="main-table-cell">Date of birth</div>
                    </div>
                    {Array.isArray(fetchedLearners) ? fetchedLearners.map((learner) => (
                        <LearnerBox Firstname={learner.first_name} Surname={learner.last_name} DOB={new Date(learner.date_of_birth).toLocaleDateString()} onClick={() => handleShowSelectedLearner(learner)} />
                    )) : null}
                </div>
                :
                // <div style={{ color: '#fff', fontSize: '30px', border: '5px solid white', height: '90px', padding: '20px', marginBottom: '70px' }}>
                //     <p>{`${fetchedLearner.first_name}'s Results`}</p>
                //     <button style={{ marginTop: '30px' }} onClick={handleHideSelectedLearner}>back</button>
                // </div>
                <Results />
                }
        </div>
    );
}

export default AdminView;
