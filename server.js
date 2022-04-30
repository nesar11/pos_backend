
const express = require('express'),
  morgan = require('morgan'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose'),
config = require('./config/DB');
const outletRoutes =require('./routes/outletRoutes');
const tableRoutes =require('./routes/tableRoutes');
const categoryRoutes =require('./routes/cateogryRoutes');
const productRoutes =require('./routes/productRoutes');
const router =require('./routes/userRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

const port = process.env.PORT || 4000;

app.use('/assets/uploads', express.static('uploads'));

app.use('/outlets', outletRoutes);
app.use('/tables', tableRoutes);
app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);
app.use('/auth', router);

const  server = app.listen(port, function(){
  console.log('Listening on Port ' + port);
});