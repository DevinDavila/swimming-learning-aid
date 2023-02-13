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

    static async apiGetUserById(req, res, next) {
        try {
            let id = req.params.id || {};
            let user = await UsersDAO.getUserById(id);
 
            if (!user) {
                res.status(404).json({ error: "Not Found" });
                return;
            }
 
            res.json(user)
        } catch (e) {
            console.log(`api, ${e}`);
            res.status(500).json({ error: e });
        }
    }
}