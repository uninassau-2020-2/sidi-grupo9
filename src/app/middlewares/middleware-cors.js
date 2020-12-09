import express from 'express';
import cors from 'cors';

const app = express();

export default async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
};
