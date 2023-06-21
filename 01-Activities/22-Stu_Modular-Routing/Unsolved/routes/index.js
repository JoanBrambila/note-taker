// TODO: Import express
const express = require('express');
// TODO: Import modules for tips/feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');
// TODO: Create app variable to create an instance of express()
const app = express();

// TODO: Use our routes
app.use('/tips', tipsRouter);
app.use('/feedback', feedbackRouter);
// TODO: Export app
module.exports = app;