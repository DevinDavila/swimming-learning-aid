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

    static async getLearners({} = {}) {
        let query;

        query = {"type": { $eq: "learner" }}

        let cursor;

        try {
            cursor = await users.find(query);
        } catch(e) {
            console.error(`Unable to issue find command, ${e}`);
            return { learnersList: [], totalNumberOfLearners: 0 }
        }

        try {
            const learnersList = await cursor.toArray();
            const totalNumberOfLearners = await users.countDocuments(query);

            return { learnersList, totalNumberOfLearners }
        } catch(e) {
            console.error(`Unable to convert cursor to array or problem counting documents, ${e}`);
            return { learnersList: [], totalNumberOfLearners: 0 }
        } 
    }
}