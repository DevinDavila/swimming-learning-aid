import React, { useEffect } from 'react';
import './AdminAuthorise.css';
import AdminBox from '../../Components/AdminBox/AdminBox';

function AdminAuthorise() {
    const [fetchedAdmins, setFetchedLAdmins] = React.useState([]);

    useEffect(() => {
        handleFetchAdmins();
    }, []);

    const handleFetchAdmins = () => {
        fetch('http://localhost:5000/api/users/getAllPendingAdmins', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((Response) => Response.json())
            .then(data => {
                setFetchedLAdmins(data.users);
            });
    }

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
                {Array.isArray(fetchedAdmins) ? fetchedAdmins.map((admin) => (
                    <AdminBox key={admin._id} Firstname={admin.first_name} Surname={admin.last_name} EmailAddress={admin.email} />
                )) : null}
                 {/* onClick={() => handleShowSelectedLearner(learner)} */}
            </div>
        </div>
    );
}

export default AdminAuthorise;