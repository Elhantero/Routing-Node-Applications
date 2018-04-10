const app = require('express')();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./app/routes');

const port = process.env.PORT || 8080;

//configure
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

//start the server
app.listen(port, function() {
    console.log(`server started on port ${port}`);
});
