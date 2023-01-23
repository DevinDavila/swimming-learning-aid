import AnswersDAO from "../../dao/answersDAO.js";

export default class AnswersController {

    static async apiGetAnswersByQuestionId(req, res, next) {
        try {
            let questionId = req.params.questionId || {};
            let answers = await AnswersDAO.getAnswersByQuestionId(questionId);
 
            if (!answers) {
                res.status(404).json({ error: "Not Found" });
                return;
            }
 
            res.json(answers)
        } catch (e) {
            console.log(`api, ${e}`);
            res.status(500).json({ error: e });
        }
    }
}