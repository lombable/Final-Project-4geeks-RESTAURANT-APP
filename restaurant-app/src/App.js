import React from "react";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./views/Home"
import WorkerRegister from "./views/WorkerRegister"
import Login from "./views/LogIn";
import AdminPanel from "./views/AdminPanel";
import './App.css'
import ClientLogin from "./views/ClientLogin"
import AdminTables from "./views/AdminTables";
import TableCreation from "./views/TableCreation";
import injectContext from "./store/appContext";
import Users from "./views/Users";
import Products from "./views/Products"
import AddProducts from "./views/AddProduct";
import KitchenOrders from "./views/KitchenOrders";
import UserEdit from "./views/UserEdit";
import ProductEdit from "./views/ProductEdit";
import TableView from "./views/TableView";
import AddOrder from "./views/AddOrder";
import UserMainView from "./views/UserMainView";

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/client-login" component={ClientLogin} />
        <Route exact path="/worker-register" component={WorkerRegister} />
        <Route exact path="/admin-panel" component={AdminPanel} />
        <Route exact path="/admin-tables" component={AdminTables} />
        <Route exact path="/table-creation" component={TableCreation} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/add-product" component={AddProducts} />
        <Route exact path="/kitchen-orders" component={KitchenOrders} />
        <Route exact path="/user-edit" component={UserEdit} />
        <Route exact path="/product-edit" component={ProductEdit} />
        <Route exact path="/table-view/:id" component={TableView} />
        <Route exact path="/add-order/table-id" component={AddOrder} />
        <Route exact path="/user/table-id" component={UserMainView} />
      </Switch>
    </Router>
  );
}

export default injectContext(App);
