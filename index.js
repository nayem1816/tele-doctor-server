const app = require('./app');
require('dotenv').config({ path: './config.env' });
// const path = require('path');
const chalk = require('chalk');

app.listen(5000, () => {
    console.log(
        chalk.cyanBright(
            `Server is running on ${chalk.blueBright(
                `http://localhost:${process.env.PORT}`
            )}`
        )
    );
});
