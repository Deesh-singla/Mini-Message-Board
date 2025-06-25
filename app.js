import express from "express";
import { fileURLToPath } from "url";
import path from "node:path"
import { indexRouter } from "./routes/index.js";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));    
app.use(express.urlencoded({ extended: true }));

app.use("/",indexRouter);



app.listen(3000);