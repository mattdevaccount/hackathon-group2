import express from 'express'
import cors from 'cors'

const app = express();

// using cors
app.use(cors());

// using express middleware for json parsing
app.use(express.json());

// for future db configuration
const db = require ('./config/keys');