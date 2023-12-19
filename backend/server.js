/*
//for MongoDB Atlas connection
//Express js imported
const express = require('express'); //express library import

//import mongoose ODM to connect mongo db
const mongoose = require('mongoose'); //for connect to mongo db

const bodyParser = require('body-parser'); //bodyParser is an middleware that inbetween front-end and Backend(database) data handling
const app = express();
const port = 8000;

//CORS package
const cors = require('cors');

//login for user
const loginData = require('../backend/routes/userRoutes');

//Express data for customer
const customerdata = require('../backend/routes/custroute');

//for order
const orderdata = require('../backend/routes/orderroute');

//for suplier
const supplierdata = require('../backend/routes/supplierroute');

//for Employee
const employeeData = require('../backend/routes/employeeroute');

//for Bill
const billdata = require('../backend/routes/billroute');

//for Finance
const financedata = require('../backend/routes/financeroute');

//for Delivery
const deliveryData = require('../backend/routes/deliveryroute');

const cartProductRoutes = require('../backend/routes/cartProductRoutes');
const checkoutInfo = require('../backend/routes/checkoutRoutes');
const orderInfo = require('../backend/routes/orderRoutes');

const router = require("../backend/routes/product-routes");

//db connection
//mongoose through database connectivity code here,-
//we can use any db name - here i used "mymerncustomerdb"
mongoose.connect('mongodb+srv://it21231896:mohamedkijan321@cluster0.rln7ptv.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Successfully Connected to MongoDB Atlas!');
})
.catch((err) => {
  console.log("Error Connecting to MongoDB Atlas: ", err);
});

//end of db connection code

//middleware - bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//use cors
app.use(cors());


//login
app.use('/login', loginData);

//the url we need - 'localhost:8000/cust/create-customer'    so,
app.use('/cust', customerdata);

//order
app.use('/order', orderdata );

//supplier
app.use('/supplier', supplierdata);

//employee
app.use('/employee', employeeData);

//bill
app.use('/bill', billdata);

//Finance
app.use('/finance' , financedata);

//Delivery
app.use('/delivery', deliveryData);

// //for user
// app.use("/users", users);

app.use('/api/cart/', cartProductRoutes);
app.use('/api/checkout/', checkoutInfo);
app.use('/api/Order/', orderInfo );
// app.use('/api/cartA/',cartA );

app.use("/products", router);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
*/



//for mongo db Local connection(PC installed database)
//Express js imported
const express = require('express') //express library import

//import mongoose ODM to connect mongo db
const mongoose = require('mongoose'); //for connect to mongo db

const bodyParser = require('body-parser') //bodyParser is an middleware that inbetween front-end and Backend(database) data handling
const app = express()
const port = 8000

//CORS package
const cors = require('cors');

//login for user
const loginData = require('../backend/routes/userRoutes')

//Express data for customer
const customerdata = require('../backend/routes/custroute')

//for order
const orderdata = require('../backend/routes/orderroute')

//for user sam
//const users = require("../backend/routes/users");

//for suplier
const supplierdata = require('../backend/routes/supplierroute')

//for Employee
const employeeData = require('../backend/routes/employeeroute')

//for Bill
const billdata = require('../backend/routes/billroute')

//for Finance
const financedata = require('../backend/routes/financeroute')

//for Delivery
const deliveryData = require('../backend/routes/deliveryroute')

const cartProductRoutes = require('../backend/routes/cartProductRoutes');
const checkoutInfo = require('../backend/routes/checkoutRoutes');
const orderInfo = require('../backend/routes/orderRoutes')

const router = require("../backend/routes/product-routes");


//db connection
//mongoose through database connectivity code here,-
//we can use any db name - here i used "mymerncustomerdb"
mongoose.connect('mongodb://127.0.0.1:27017/mymerncustomerdb')
  .then((x) => {    //.then -disply the message when db connecting Succesfully.
    console.log('Succesfully Connected to Mongo Database Called :', x.connections[0].name)
  })
  .catch((err) => { //.catch - comment is used to find the error that when database not connected .
    console.log("Error Connectiong to Mongo!!!!", err)
  })

//end of db connection code

//middleware - bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

//use cors
app.use(cors())


//login
app.use('/login',loginData)

//the url we need - 'localhost:8000/cust/create-customer'    so,
app.use('/cust',customerdata)

//order
app.use('/order',orderdata )

//supplier
app.use('/supplier',supplierdata)

//employee
app.use('/employee',employeeData)

//bill
app.use('/bill', billdata)

//Finance
app.use('/finance' ,financedata)

//Delivery
app.use('/delivery', deliveryData)

// //for user
// app.use("/users", users);

app.use('/api/cart/', cartProductRoutes);
app.use('/api/checkout/', checkoutInfo);
app.use('/api/Order/',orderInfo );
// app.use('/api/cartA/',cartA );

app.use("/products", router);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
