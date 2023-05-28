const express = require('express');
const router = express.Router();
const mealsRouter = require('./routes/meals');


const app = express();

// Other app configurations and middleware

app.use('/api', mealsRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
