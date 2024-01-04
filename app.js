const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const factRoutes = require('./routes/factRoutes');
const userRoute = require('./routes/userRoutes')

const app = express();
app.use(cors());

if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/facts',factRoutes)
app.use('/api/v1/users', userRoute)


module.exports = app;