const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))


const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Listening on port ${port}...`));

