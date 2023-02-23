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

    static async apiGetAllPendingAdmins(req, res, next) {

        const { usersList, totalNumberOfUsers } = await UsersDAO.getAllPendingAdmins();

        let response = {
            users: usersList,
            total_results: totalNumberOfUsers
        };
        
        res.json(response);
    }

    static async apiUpdateAdminStatus(req, res, next) {
        try {
            const userId = req.body.user_id;
            const status = req.body.status;
 
            const userResponse = await UsersDAO.updateAdminStatus(
                userId,
                status
            );
 
            var { error } = userResponse;
            if (error) {
                res.status(400).json({ error });
            }
 
            if (userResponse.modifiedCount === 0) {
                throw new Error("Unable to update the user in controller.")
            }
 
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}