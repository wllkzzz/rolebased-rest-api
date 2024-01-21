const express = require('express');
const sequelize = require('./config/db.js');
const dotenv = require('dotenv');
const router = require('./routes');
dotenv.config()

const PORT = process.env.SERVER_PORT || 3000;


const app = express();
app.use(express.json())

app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()

        app.listen(PORT, () => {console.log(`Server has been started on PORT: ${PORT}`);})

    } catch (error) {

       

    }
}

