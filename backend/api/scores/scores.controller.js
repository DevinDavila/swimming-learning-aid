import ScoresDAO from "../../dao/scoresDAO.js";

export default class ScoresController {

    static async apiGetScoreByStudentIdByStage(req, res, next) {
        try {
            let studentId = req.params.studentId || {};
            let stage = req.params.stage || {};
            let scores = await ScoresDAO.getScoreByStudentIdByStage(studentId, stage);
 
            if (!scores) {
                res.status(404).json({ error: "Not Found" });
                return;
            }
 
            res.json(scores)
        } catch (e) {
            console.log(`api, ${e}`);
            res.status(500).json({ error: e });
        }
    }
}