import mongodb from 'mongodb';
		 
const ObjectId = mongodb.ObjectId;

let users;

export default class UserDAO {
		 
    // This method will run as soon as the server starts and it connect to the database.
    static async injectDB(conn) {
        if (users) {
            return;
        }
        try {
            users = await conn.db(process.env.DB_NAME).collection("users");
        } catch (e) {
            console.error(`Unable to establish a collection in usersDAO: ${e}`);
        }
    }

    static async getAllUsers({} = {}) {
        let query;

        query = {"type": { $eq: "Learner" }}

        let cursor;

        try {
            cursor = await users.find(query);
        } catch(e) {
            console.error(`Unable to issue find command, ${e}`);
            return { usersList: [], totalNumberOfUsers: 0 }
        }

        try {
            const usersList = await cursor.toArray();
            const totalNumberOfUsers = await users.countDocuments(query);

            return { usersList, totalNumberOfUsers }
        } catch(e) {
            console.error(`Unable to convert cursor to array or problem counting documents, ${e}`);
            return { usersList: [], totalNumberOfUsers: 0 }
        } 
    }
}