import UsersDAO from "../../dao/usersDAO.js";

export default class UsersController {

    static async apiGetAllUsers(req, res, next) {

        const { usersList, totalNumberOfUsers } = await UsersDAO.getAllUsers();

        let response = {
            users: usersList,
            total_results: totalNumberOfUsers
        };
        
        res.json(response);
    }
}