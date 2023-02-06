import './Stages.css';
import Logo from '../../Components/Logo/Logo';
import StageBox from '../../Components/StageBox/StageBox';

function Stages() {
    return (
        <div>
            <div class="top-section">
                <Logo />
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
