import StudentsDAO from "../dao/studentsDAO.js";

export default class StudentsController {

    static async apiGetStudents(req, res, next) {

        const { studentsList, totalNumberOfStudents } = await StudentsDAO.getStudents();

        let response = {
            students: studentsList,
            total_results: totalNumberOfStudents
        };
        
        res.json(response);
    }
}