import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import AddReview from './pages/AddReview/AddReview';
import Dashboard from './pages/Dashboard/Dashboard';
import Explore from './pages/Explore/Explore';
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import MyOrders from './pages/MyOrders/MyOrders';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Payment from './pages/Payment/Payment';
import Purchase from './pages/Purchase/Purchase';
import Register from './pages/Register/Register';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/purchase/:id">
            <Purchase />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/payment">
            <Payment />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <AddReview />
          </PrivateRoute>
          <PrivateRoute path="/myorders">
            <MyOrders />
          </PrivateRoute>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
