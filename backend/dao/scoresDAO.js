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

    static async getScoreByStudentIdByStage(studentId, stage) {
        try {
            const pipeline = [
                {
                    $match: {
                        student_id: new ObjectId(studentId),
                        stage: stage
                    }
                }
            ]
            return await scores.aggregate(pipeline).toArray();
        } catch (e) {
            console.error(`Something went wrong in getScoreByStudentIdByStage: ${e}`);
            throw e;
        }
    }
}