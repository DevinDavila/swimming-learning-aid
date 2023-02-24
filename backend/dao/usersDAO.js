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

    static async getUserById(id) {
        try {
            const pipeline = [
                {
                    $match: {
                        _id: new ObjectId(id)
                    }
                }
            ]
            return await users.aggregate(pipeline).next();
        } catch (e) {
            console.error(`Something went wrong in getUserById: ${e}`);
            throw e;
        }
    }

    static async getAllPendingAdmins({} = {}) {
        let query;

        query = {"type": { $eq: "Admin" }, "status": { $eq: "Pending"} }

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

    static async updateAdminStatus(userId, status) {
        try {
            const updateResponse = await users.updateOne(
                { _id: ObjectId(userId) },
                { $set: { status: status } }
            );
 
            return updateResponse;
        } catch (e) {
            console.error(`Unable to update user in DAO: ${e}`);
        
        return { error: e };
        }
    }
}