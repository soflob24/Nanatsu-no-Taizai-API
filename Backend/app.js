import express from "express";
import route from "./routes/routes.js";
import cors from 'cors';
const app = express()


app.use(cors())

app.use('/', route);

app.listen(8000, () => console.log('Server Ok') )

