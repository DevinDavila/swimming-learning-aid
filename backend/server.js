import express from "express";
import cors from "cors";
import students from "./api/students.route.js"; // This is the routes file we will create later
// import authentication from "./api/authentication/authentication.route.js"
 
const app = express();
 
app.use(cors());
app.use(express.json()); // This allows the server can accept and will be able to read json 
 
// Specify the initial url of the routes. The actual routes will be in another file. 
app.use("/api/students", students); // Specifying the url for the route 
// app.use("/api/authentication", authentication);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));
 
export default app;