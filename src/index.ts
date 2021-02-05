import * as dotenv from 'dotenv';
import "reflect-metadata";
import { createConnection } from 'typeorm';
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";

dotenv.config();

const app = express();
createConnection({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  synchronize: true,
});



app.use(bodyParser.json());

app.use(routes);

app.listen(3333);
