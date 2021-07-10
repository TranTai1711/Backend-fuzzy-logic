require('dotenv').config()
import express,{ Request, Response} from 'express';
import {Connection} from './connection/DB'
import cors from 'cors'
// rest of the code remains same
const app = express();
const PORT = 8000;

Connection()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/', (Request, Response) => Response.send('Express + TypeScript Server'));

app.get('/ping', (Request, Response) => {
  Response.json({ping: "ping"})
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});