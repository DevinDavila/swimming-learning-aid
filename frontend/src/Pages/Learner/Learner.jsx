import React, { useState } from 'react';
import BackButton from '../../Components/BackButton/BackButton';
import './Learner.css';
import { useNavigate } from "react-router-dom";

function Learner() {
    const navigate = useNavigate();

    const [signUp, setSignUp] = React.useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [guardianFirstName, setGuardianFirstName] = useState('');
    const [guardianLastName, setGuardianLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());

    const handleShowSignUp = () => setSignUp(true)
    const handleHideSignUp = () => setSignUp(false);

    const handleLogin = () => {
        fetch('http://localhost:5000/api/authentication/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then((Response) => Response.json())
            .then((result) => {
                console.log(result.status)
                if (result.status === 'success') {
                    sessionStorage.setItem('token', result.user.token);
                    sessionStorage.setItem('email', email);
                    navigate('/stages');
                }
            })
    }

    const handleDOBChange = (event) => {
        const newDate = new Date(event.target.value);
        if (newDate < dateOfBirth) {
            setDateOfBirth(newDate);
        } else {
          console.log('Enter a valid DOB')
        }
      };

    const handleRegister = () => {
        if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
            console.log('Fill in required fields!')
        } else {
            if (password != confirmPassword) {
                console.log("Passwords don't match!")
            } else {
                fetch('http://localhost:5000/api/authentication/register', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        first_name: firstName,
                        last_name: lastName,
                        email: email,
                        password: password,
                        type: 'Learner',
                        date_of_birth: dateOfBirth,
                        guardian_first_name: guardianFirstName,
                        guardian_last_name: guardianLastName
                    })
                })
                    .then((Response) => Response.json())
                    .then((result) => {
                        if (result.status === 'success') {
                            console.log(result.status)
                        }
                    })
            }
        }
    }

    return (
        <div className='learner-container'>
            <BackButton />
            {!signUp ?
                <div class="learner-login-section">
                    <div class="learner-login-section-title">Learner login</div>
                    <form class="learner-login-form">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" onChange={e => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email address" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" onChange={e => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="learner-login-submit-button-container">
                            <button type='button' onClick={handleLogin} class="btn btn-primary learner-login-submit-button">Login</button>
                        </div>
                        <div class="learner-login-submit-text">
                            Don't have an account?&nbsp;
                            <text onClick={handleShowSignUp} class="learner-login-submit-text-link">Sign up here</text>
                        </div>
                    </form>
                </div>
                :
                <>
                    <div class="learner-sign-up-main-section">
                        <div class="learner-sign-up-section-title">Learner Sign up</div>

                        <div class="learner-sign-up-big-section">

                            <div class="learner-sign-up-left-section">
                                <form class="learner-sign-up-form">
                                    <div class="form-group">
                                        <label for="inputEmailAddress">Email address</label> <div class="learner-required-text"> *</div>
                                        <input type="email" onChange={e => setEmail(e.target.value)} class="form-control" id="inputEmailAddress" aria-describedby="emailHelp" placeholder="Enter email address" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword">Password</label>   <div class="learner-required-text"> *</div>
                                        <input type="password" onChange={e => setPassword(e.target.value)} class="form-control" id="inputPassword" placeholder="Password" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputConfirmPassword">Confirm Password</label> <div class="learner-required-text"> *</div>
                                        <input type="password" onChange={e => setConfirmPassword(e.target.value)} class="form-control" id="inputConfirmPassword" placeholder="Confirm Password" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputDOB">Enter your Date of Birth</label> <div class="learner-required-text"> *</div>
                                        <input type="date" value={dateOfBirth.toISOString().substring(0, 10)} onChange={handleDOBChange} class="form-control" id="inputDOB" />
                                    </div>
                                </form>
                            </div>

                            <div class="learner-sign-up-right-section">
                                <form class="learner-sign-up-form">
                                    <div class="form-group">
                                        <label for="inputGuardianFirstname">Guardian Firstname</label>
                                        <input type="name" onChange={e => setGuardianFirstName(e.target.value)} class="form-control" id="inputGuardianFirstname" placeholder="e.g. Olivia" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputGuardianSurname">Guardian Surname</label>
                                        <input type="name" onChange={e => setGuardianLastName(e.target.value)} class="form-control" id="inputGuardianSurname" placeholder="e.g. Jones" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputLearnerFirstname">Learner Firstname</label> <div class="learner-required-text"> *</div>
                                        <input type="name" onChange={e => setFirstName(e.target.value)} class="form-control" id="inputLearnerFirstname" placeholder="e.g. Bob" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputLearnerSurname">Learner Surname</label> <div class="learner-required-text"> *</div>
                                        <input type="name" onChange={e => setLastName(e.target.value)} class="form-control" id="inputLearnerSurname" placeholder="e.g. Smith" />
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div class="learner-sign-up-submit-button-container">
                            <button type="button" onClick={handleRegister} class="btn btn-primary learner-sign-up-submit-button">Sign up</button>
                        </div>

                        <div class="learner-sign-up-submit-text"> Already have an an account?&nbsp;
                            <text onClick={handleHideSignUp} class="learner-sign-up-submit-text-link">Login here</text>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default Learner;
