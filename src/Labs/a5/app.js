import express from "express";
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import cors from "cors";
const app = express();
app.use(cors());
CourseRoutes(app);
Lab5(app);
app.listen(4000);