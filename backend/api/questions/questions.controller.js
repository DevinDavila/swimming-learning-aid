import QuestionsDAO from "../../dao/questionsDAO.js";

export default class QuestionsController {

    static async apiGetQuestionsByStage(req, res, next) {
        try {
            let stage = req.params.stage || {};
            let question = await QuestionsDAO.getQuestionsByStage(stage);
 
            if (!question) {
                res.status(404).json({ error: "Not Found" });
                return;
            }
 
            res.json(question)
        } catch (e) {
            console.log(`api, ${e}`);
            res.status(500).json({ error: e });
        }
    }
}