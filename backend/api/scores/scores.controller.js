import ScoresDAO from "../../dao/scoresDAO.js";

export default class ScoresController {

    static async apiGetScoreByUserIdByStage(req, res, next) {
        try {
            let userId = req.params.userId || {};
            let stage = parseInt(req.params.stage) || {};
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

    static async apiAddScore(req, res, next) {
        try {
            const userId = req.body.user_id;
            const stage = req.body.stage;
            const dateTime = req.body.date_time;
            const score = req.body.score;
 
            const addScoreResponse = await ScoresDAO.addScore(
                userId,
                stage,
                dateTime,
                score
            );

            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}