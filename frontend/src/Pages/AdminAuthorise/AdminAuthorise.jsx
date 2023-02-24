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

    const handleApprove = (adminId) => {
        fetch('http://localhost:5000/api/users/updateAdminStatus', {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: adminId,
                status: "Approved"
            })
        })
            .then((Response) => Response.json())
            .then(() => {
                handleFetchAdmins();
            })
    }

    const handleDecline = (adminId) => {
        fetch('http://localhost:5000/api/users/updateAdminStatus', {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: adminId,
                status: "Declined"
            })
        })
            .then((Response) => Response.json())
            .then(() => {
                handleFetchAdmins();
            })
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
                    <AdminBox key={admin._id} Firstname={admin.first_name} Surname={admin.last_name} EmailAddress={admin.email} clickGreen={() => handleApprove(admin._id)} clickRed={() => handleDecline(admin._id)} />
                )) : null}
            </div>
        </div>
    );
}

export default AdminAuthorise;