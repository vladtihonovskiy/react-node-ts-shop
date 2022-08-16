import express, { Express } from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import fileUpload  from 'express-fileupload';
import { json } from 'body-parser';
import routes from "./routes";


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));
app.use(json());
app.use(routes);

mongoose.connect(process.env.MONG_URI as string).then(() => {
  console.log('Successfylly connect to mongo')
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });

}).catch(e => {
  console.log('Connection Error ', e.message)
})