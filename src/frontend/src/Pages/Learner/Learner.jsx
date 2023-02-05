import BackButton from '../../Components/BackButton/BackButton';
import './Learner.css';

function Learner() {
    return (
        <div className='learner-container'>
            <BackButton />
            <div class="learner-login-section">
                <div class="learner-login-section-title">Learner login</div>
                <form class="learner-login-form">
                    <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email address"/>
                    </div>
                    <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div class="learner-login-submit-button-container">
                        <button type="submit" class="btn btn-primary learner-login-submit-button">Login</button>
                    </div>
                    <div class="learner-login-submit-text">
                        Don't have an account?
                        <a href="file:///C:/Users/devin/OneDrive/Desktop/Documents/School/Computer%20Science/Visual%20Studio/frontend/html/learner-sign-up.html" class="learner-login-submit-text-link">Sign up here</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Learner;
