import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//footer
import Footer from './components/Home/footer'


import Login from './components/login/Login';
import UserLogin from './components/UserLogin/UserLogin'
import Register from './components/login/Register';
import HomePage from './components/HomePage';
import ProductApp from './components/ProductApp';
import CustomerApp from './components/CustomerApp';
import OrderApp from './components/OrderApp'; // Import OrderApp component
import SupplierApp from './components/SupplierApp';
import EmployeeApp from './components/EmployeeApp';
import BillApp from './components/BillApp';
import FinanceApp from './components/FinanceApp';
import DeliveryApp from './components/DeliveryApp';
import Home from './components/Home/Home'
import CreateCustomer from './components/Customer/CreateCustomer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
            <Footer/>
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/user-login">
            <UserLogin />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/home-page">
            <HomePage />
            <Footer/>
          </Route>

          {/* For Products */}
          <Route exact path="/product-home">
            <ProductApp />
            <Footer/>
          </Route>

          {/* For Customer */}
          <Route path="/account-home">
            <CustomerApp />
            <Footer/>
          </Route>

          {/* For Order */}
          <Route path="/order-home">
            <OrderApp />
            <Footer/>
          </Route>

          {/* For Supplier */}
          <Route path="/supplier-home">
            <SupplierApp />
            <Footer/>
          </Route>

          {/*For Employee */}
          <Route path="/employee-home">
            <EmployeeApp/>
            <Footer/>
          </Route>

          {/*For Bill */}
          <Route path="/bill-home">
            <BillApp/>
            <Footer/>
          </Route>

          {/*For Bill */}
          <Route path="/finance-home">
            <FinanceApp/>
            <Footer/>
          </Route>

          {/*For Bill */}
          <Route path="/delivery-home">
            <DeliveryApp/>
            <Footer/>
          </Route>

          {/*For Bill */}
          <Route path="/create-customer">
            <CreateCustomer/>
            <Footer/>
          </Route>
          

        </Switch>
       
      </Router>
    </div>
  );
}

export default App;
