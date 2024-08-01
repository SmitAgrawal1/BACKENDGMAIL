import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import routes from './routes/route.js';
import dotenv  from 'dotenv';

  
dotenv.config();  
const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use('/', routes);



const PORT = process.env.PORT|| 8000; 

Connection();

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));