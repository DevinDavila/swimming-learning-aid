import UsersDAO from "../../dao/usersDAO.js";

export default class UsersController {

    static async apiGetLearners(req, res, next) {

        const { learnersList, totalNumberOfLearners } = await UsersDAO.getLearners();

        let response = {
            learners: learnersList,
            total_results: totalNumberOfLearners
        };
        
        res.json(response);
    }
}