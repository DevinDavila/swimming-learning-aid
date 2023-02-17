import { useNavigate } from "react-router-dom";
import './Stages.css';
import Logo from '../../Components/Logo/Logo';
import StageBox from '../../Components/StageBox/StageBox';

function Stages() {
    const navigate = useNavigate();

    const handleShowQuiz = (stageClicked) => {
        navigate('/quiz', { state: { stage: stageClicked } });
    }

    return (
        <div>
            <div className="top-section">
                <Logo />
                <div className="option-container">
                    <div className="results-container">
                        <div className="results-text">Results</div>
                    </div>
                    <div className="account-container">
                        <div className="account-text">Account</div>
                    </div>
                </div>
            </div>

            <div className="middle-section">
                <div className="middle-section-text">Learn to Swim Stages</div>
                <div className="stages-container">
                    <StageBox name="Stage 1" color="#FF0000" onClick={() => handleShowQuiz(1)} />
                    <StageBox name="Stage 2" color="#F49401" onClick={() => handleShowQuiz(2)} />
                    <StageBox name="Stage 3" color="#FFD817" onClick={() => handleShowQuiz(3)} />
                    <StageBox name="Stage 4" color="#8BB643" onClick={() => handleShowQuiz(4)} />
                    <StageBox name="Stage 5" color="#76CFF5" onClick={() => handleShowQuiz(5)} />
                    <StageBox name="Stage 6" color="#4163A6" onClick={() => handleShowQuiz(6)} />
                    <StageBox name="Stage 7" color="#A174AF" onClick={() => handleShowQuiz(7)} />
                </div>
            </div>

            <div className="bottom-section">
                <div className="bottom-section-text">Further Swimming</div>
                <div className="bottom-section-boxes">
                    <div className="left-box">
                        <div className="left-box-text">Job/Career Opportunities</div>
                    </div>
                    <div className="right-box">
                        <div className="right-box-text">Club Opportunities</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stages;
