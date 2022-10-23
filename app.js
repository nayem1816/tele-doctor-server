const express = require('express');
const router = require('./src/routes/api');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({ path: './config.env' });
const chalk = require('chalk');

const app = new express();

//Security middleware import
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const hpp = require('hpp');
const xss = require('xss-clean');

//Express rate limit
// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
//     standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//     legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// });

// Middleware implements
app.use(cors());
app.use(mongoSanitize());
app.use(helmet());
app.use(hpp());
app.use(xss());
// app.use(limiter);
app.use(bodyParser.json());

//Mongodb Connect by mongoose
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER_NAME}.${process.env.DB_HOSTNAME}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(URI, (err) => {
    if (err) {
        console.log('Error in connecting to database......');
        console.log(err);
    } else {
        console.log(chalk.cyanBright('Database connected successful'));
    }
});

app.use('/api/v1', router);

app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.status(200).json({
            status: 'success',
            message: 'Welcome to TeleDoctor API',
        });
    } else {
        next();
    }
});

app.use('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        data: 'This route is not exist.',
    });
});

module.exports = app;
