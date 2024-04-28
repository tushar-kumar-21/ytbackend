import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.routes.js';

const app = express();

app.use(cors({
    origin: 'https://ytbackend-r3du.onrender.com/',
    credentials: true,
}))

app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static("public"))
app.use(cookieParser())

//ROUTES
app.use('/api/v1/users', userRouter);

export { app };