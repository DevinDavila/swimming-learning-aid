import AuthenticationDAO from "../../dao/authenticationDAO.js";

export default class AuthenticationController {

    static async apiRegisterUser(req, res, next) {
        try {
            const dateOfBirth = req.body.date_of_birth;
            const guardianFirstName = req.body.guardian_first_name;
            const guardianLastName = req.body.guardian_last_name;
            const firstName = req.body.first_name;
            const lastName = req.body.last_name;
            const email = req.body.email;
            const password = req.body.password;
            const type = req.body.type;
            const status = req.body.status;

            const registerResponse = await AuthenticationDAO.registerUser(
                dateOfBirth,
                guardianFirstName,
                guardianLastName,
                firstName,
                lastName,
                email,
                password,
                type,
                status
            );

            var { error } = registerResponse;
            if (error) {
                res.status(400).json({ error });
            }
 
            if (registerResponse.modifiedCount === 0) {
                throw new Error("Unable to add user in controller.")
            }
 
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiLoginUser(req, res, next) {
        try {
            const email = req.body.email;
            const password = req.body.password;

            const user = await AuthenticationDAO.loginUser(
                email,
                password
            );

            var { status, error } = user;
            if (error) {
                return res.status(400).json({ status, error });
            }
 
            if (user.modifiedCount === 0) {
                throw new Error("Unable to login user in controller.")
            }
 
            res.json({ status: "success", user: user});
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}