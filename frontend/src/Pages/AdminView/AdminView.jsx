import React, { useEffect } from 'react';
import './AdminView.css';
import LearnerBox from '../../Components/LearnerBox/LearnerBox';

function AdminView() {
    const [fetchedLearners, setFetchedLearners] = React.useState([]);
    const [results, setResults] = React.useState(false);

    const handleShowResults = () => setResults(true)
    const handleHideResults = () => setResults(false);

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
            .then (data => {
                setFetchedLearners(data.users);
    
                // Used to update state immediately.
                setFetchedLearners((state) => {
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
                    <LearnerBox Firstname={learner.first_name} Surname={learner.last_name} DOB={new Date(learner.date_of_birth).toLocaleDateString()} />
                )) : null}
            </div>
            :
            <div style={{ color: '#fff', fontSize: '30px', border: '5px solid white', height: '90px', padding: '20px' }}>
                THIS IS THE RESULTS PAGE
            </div>}
        </div>
    );
}

export default AdminView;
