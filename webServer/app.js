const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.use('/', authRoutes);

app.listen(3535, () => {
    console.log(`Example app listening on port 3535`)
})



