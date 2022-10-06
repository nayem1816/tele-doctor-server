const app = require('./app');
require('dotenv').config({ path: './config.env' });
const path = require('path');

app.listen(5000, () => {
    console.log(`Server is running on port @${process.env.PORT}`);
});
