import mongodb from 'mongodb';
		 
const ObjectId = mongodb.ObjectId;

let questions;

export default class QuestionsDAO {
		 
    // This method will run as soon as the server starts and it connect to the database.
    static async injectDB(conn) {
        if (questions) {
            return;
        }
        try {
            questions = await conn.db(process.env.DB_NAME).collection("questions");
        } catch (e) {
            console.error(`Unable to establish a collection in questionsDAO: ${e}`);
        }
    }

    static async getQuestionsByStage(stage) {
        try {
            const pipeline = [
                {
                    $match: {
                        stage: stage
                    }
                }
            ]
            return await questions.aggregate(pipeline).toArray();
        } catch (e) {
            console.error(`Something went wrong in getQuestionsByStage: ${e}`);
            throw e;
        }
    }
}