import mongodb from 'mongodb';
		 
const ObjectId = mongodb.ObjectId;

let students;

export default class StudentsDAO {
		 
    // This method will run as soon as the server starts and it connect to the database.
    static async injectDB(conn) {
        if (students) {
            return;
        }
        try {
            students = await conn.db(process.env.DB_NAME).collection("students");
        } catch (e) {
            console.error(`Unable to establish a collection in studentsDAO: ${e}`);
        }
    }

    static async getStudents({} = {}) {
        let query;

        query = {}

        let cursor;

        try {
            cursor = await students.find(query);
        } catch(e) {
            console.error(`Unable to issue find command, ${e}`);
            return { studentsList: [], totalNumberOfStudents: 0 }
        }

        try {
            const studentsList = await cursor.toArray();
            const totalNumberOfStudents = await students.countDocuments(query);

            return { studentsList, totalNumberOfStudents }
        } catch(e) {
            console.error(`Unable to convert cursor to array or problem counting documents, ${e}`);
            return { studentsList: [], totalNumberOfStudents: 0 }
        } 
    }
}