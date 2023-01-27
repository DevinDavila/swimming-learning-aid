import ScoresDAO from "../../dao/scoresDAO.js";

export default class ScoresController {

    static async apiGetScoreByUserIdByStage(req, res, next) {
        try {
            let userId = req.params.userId || {};
            let stage = req.params.stage || {};
            let scores = await ScoresDAO.getScoreByUserIdByStage(userId, stage);
 
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

    static async apiGetLatestScoreByUserId(req, res, next) {
        try {
            let userId = req.params.userId || {};
            let scores = await ScoresDAO.getLatestScoreByUserId(userId);
 
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