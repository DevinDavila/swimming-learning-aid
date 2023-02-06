import './Stages.css';
import logoImg from '../../images/SE-Logo-RGB.png'
import StageBox from '../../Components/StageBox/StageBox';

function Stages() {
    return (
        <div>
            <div class="top-section">
                <div class="logo">
                    <img src={logoImg} alt="SE-logo-icon" class="logo-picture" />
                    <div class="logo-text">
                        <div class="logo-blue-text">Swimming</div>
                        <div class="logo-red-text">Learning</div>
                        <div class="logo-red-text">Aid</div>
                    </div>
                </div>
                <div class="option-container">
                    <div class="results-container">
                        <div class="results-text">Results</div>
                    </div>
                    <div class="account-container">
                        <div class="account-text">Account</div>
                    </div>
                </div>
            </div>

            <div class="middle-section">
                <div class="middle-section-text">Learn to Swim Stages</div>
                <div class="stages-container">
                    <StageBox name="Stage 1" color="#FF0000" />
                    <StageBox name="Stage 2" color="#F49401" />
                    <StageBox name="Stage 3" color="#FFD817" />
                    <StageBox name="Stage 4" color="#8BB643" />
                    <StageBox name="Stage 5" color="#76CFF5" />
                    <StageBox name="Stage 6" color="#4163A6" />
                    <StageBox name="Stage 7" color="#A174AF" />
                </div>
            </div>

            <div class="bottom-section">
                <div class="bottom-section-text">Further Swimming</div>
                <div class="bottom-section-boxes">
                    <div class="left-box">
                        <div class="left-box-text">Job/Career Opportunities</div>
                    </div>
                    <div class="right-box">
                        <div class="right-box-text">Club Opportunities</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stages;
