import mongodb from 'mongodb';
		 
const ObjectId = mongodb.ObjectId;

let answers;

export default class AnswersDAO {
		 
    // This method will run as soon as the server starts and it connect to the database.
    static async injectDB(conn) {
        if (answers) {
            return;
        }
        try {
            answers = await conn.db(process.env.DB_NAME).collection("answers");
        } catch (e) {
            console.error(`Unable to establish a collection in answersDAO: ${e}`);
        }
    }

    static async getAnswersByQuestionId(questionId) {
        try {
            const pipeline = [
                {
                    $match: {
                        question_id: new ObjectId(questionId)
                    }
                }
            ]
            return await answers.aggregate(pipeline).toArray();
        } catch (e) {
            console.error(`Something went wrong in getAnswersByQuestionId: ${e}`);
            throw e;
        }
    }
}