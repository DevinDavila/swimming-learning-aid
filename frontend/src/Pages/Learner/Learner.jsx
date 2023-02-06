import React from 'react';
import BackButton from '../../Components/BackButton/BackButton';
import './Learner.css';

function Learner() {
    const [signUp, setSignUp] = React.useState(false);

    const handleShowSignUp = () => setSignUp(true)
    const handleHideSignUp = () => setSignUp(false);

    return (
        <div className='learner-container'>
            <BackButton />
            {!signUp ?
                <div class="learner-login-section">
                    <div class="learner-login-section-title">Learner login</div>
                    <form class="learner-login-form">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email address" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="learner-login-submit-button-container">
                            <button type="submit" class="btn btn-primary learner-login-submit-button">Login</button>
                        </div>
                        <div class="learner-login-submit-text">
                            Don't have an account?
                            <a href="/#" onClick={handleShowSignUp} class="learner-login-submit-text-link">Sign up here</a>
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
                                        <input type="email" class="form-control" id="inputEmailAddress" aria-describedby="emailHelp" placeholder="Enter email address" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword">Password</label>   <div class="learner-required-text"> *</div>
                                        <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputConfirmPassword">Confirm Password</label> <div class="learner-required-text"> *</div>
                                        <input type="confirmPassword" class="form-control" id="inputConfirmPassword" placeholder="Confirm Password" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputDOB">Enter your Date of Birth</label> <div class="learner-required-text"> *</div>
                                        <input type="date" class="form-control" id="inputDOB" value="2000-00-00" />
                                    </div>
                                </form>
                            </div>

                            <div class="learner-sign-up-right-section">
                                <form class="learner-sign-up-form">
                                    <div class="form-group">
                                        <label for="inputGuardianFirstname">Guardian Firstname</label>
                                        <input type="name" class="form-control" id="inputGuardianFirstname" placeholder="e.g. Olivia" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputGuardianSurname">Guardian Surname</label>
                                        <input type="name" class="form-control" id="inputGuardianSurname" placeholder="e.g. Jones" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputLearnerFirstname">Learner Firstname</label> <div class="learner-required-text"> *</div>
                                        <input type="name" class="form-control" id="inputLearnerFirstname" placeholder="e.g. Bob" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputLearnerSurname">Learner Surname</label> <div class="learner-required-text"> *</div>
                                        <input type="name" class="form-control" id="inputLearnerSurname" placeholder="e.g. Smith" />
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div class="learner-sign-up-submit-button-container">
                            <button type="submit" class="btn btn-primary learner-sign-up-submit-button">Sign up</button>
                        </div>

                        <div class="learner-sign-up-submit-text"> Already have an an account?
                            <a href="/#" onClick={handleHideSignUp} class="learner-sign-up-submit-text-link">Login here</a>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default Learner;
