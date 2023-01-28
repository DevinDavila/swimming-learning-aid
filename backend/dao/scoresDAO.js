import mongodb from 'mongodb';
		 
const ObjectId = mongodb.ObjectId;

let scores;

export default class ScoresDAO {
		 
    // This method will run as soon as the server starts and it connect to the database.
    static async injectDB(conn) {
        if (scores) {
            return;
        }
        try {
            scores = await conn.db(process.env.DB_NAME).collection("scores");
        } catch (e) {
            console.error(`Unable to establish a collection in scoresDAO: ${e}`);
        }
    }

    static async getScoreByUserIdByStage(userId, stage) {
        try {
            const pipeline = [
                {
                    $match: {
                        user_id: new ObjectId(userId),
                        stage: stage
                    }
                }
            ]
            return await scores.aggregate(pipeline).toArray();
        } catch (e) {
            console.error(`Something went wrong in getScoreByUserIdByStage: ${e}`);
            throw e;
        }
    }

    static async getLatestScoreByUserId(userId) {
        try {
            const pipeline = [
                {
                    $match: {
                        user_id: new ObjectId(userId)
                    }
                },
                {
                    $sort: {
                        date_time: -1
                    }
                }
            ]
            return await scores.aggregate(pipeline).next();
        } catch (e) {
            console.error(`Something went wrong in getLatestScoreByUserId: ${e}`);
            throw e;
        }
    }
}