import app from './server.js';
import mongodb from "mongodb";
import dotenv from "dotenv";
import StudentsDAO from './dao/studentsDAO.js';
import QuestionsDAO from './dao/questionsDAO.js';
import AnswersDAO from './dao/answersDAO.js';
import ScoresDAO from './dao/scoresDAO.js';
// import AuthenticationDAO from './dao/authenticationDAO.js';

dotenv.config();
 
const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || 8000;
 
MongoClient.connect(
    process.env.SWIMMING_LEARNING_AID_DB_URI,
    {
        maxPoolSize: 10, // max 10 people can connect
        wtimeoutMS: 2500,
        useNewUrlParser: true // parses the connection string
    }
)
.catch(err => {
    console.error(err.stack);
    process.exit(1)
})
// if there's no errors run the following code 
.then(async client => {
    await StudentsDAO.injectDB(client);
    await QuestionsDAO.injectDB(client);
    await AnswersDAO.injectDB(client);
    await ScoresDAO.injectDB(client);
    // await AuthenticationDAO.injectDB(client);
    
    app.listen(port, () => {
        console.log(`listening to port ${port}`);
    });
})