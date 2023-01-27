// import mongodb from 'mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { type } from 'os';
		 
// const ObjectId = mongodb.ObjectId;

let users;

export default class AuthenticationDAO {

    // This method will run as soon as the server starts and it connect to the database.
    static async injectDB(conn) {
        if (users) {
            return;
        }
        try {
            users = await conn.db(process.env.DB_NAME).collection("users");
        } catch (e) {
            console.error(`Unable to establish a collection in authenticationDAO: ${e}`);
        }
    }

    static async registerUser(dateOfBirth, guardianFirstName, guardianLastName, firstName, lastName, email, password, type, status) {
        try {
            // Validate if user exist in our database
            const oldUser = await users.findOne({ email });

            if (oldUser) {
                return res.status(409).send("User Already Exist. Please Login");
            }

            //Encrypt user password
            const encryptedPassword = await bcrypt.hash(password, 10);

            const user = {
                date_of_birth: dateOfBirth,
                guardian_first_name: guardianFirstName,
                guardian_last_name: guardianLastName,
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: encryptedPassword,
                type: type,
                status: status
            };

            // Create token
            const token = jwt.sign(
                { 
                    user_id: user._id, 
                    email 
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            
            // Save user token
            user.token = token;

            return await users.insertOne(user);
        } catch (e) {
            console.error(`Unable to add user: ${e}`);
            return { error: e };
        }
    }

    static async loginUser(email, password) {
        try {
            // Validate if user exist in our database
            const user = await users.findOne({ email });

            if (user && (await bcrypt.compare(password, user.password))) {
                // Create token
                const token = jwt.sign({ 
                    user_id: user._id,
                    email
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                });
            
                // save user token
                user.token = token;
            
                return await user;
            } else {
                return { status: 'Failed', error: 'Invalid credentials' };
            }
        } catch (e) {
            console.error(`Unable to add user: ${e}`);
            return { error: e };
        }
    }
}