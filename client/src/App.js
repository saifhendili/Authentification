import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './Component/Layout/Navbar';
import Alert from './Component/Layout/Alert';
import Register from './Component/Auth/Register';
import Login from './Component/Auth/Login';
import Dashboard from './Component/Dashboard/Dashboard';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './Component/routing/PrivateRoute';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import LandingPage from "./Component/Layout/LandingPage"
import Service from './Component/Service/Service';

import Matchs from './Component/Service/Matchs';
import Reservation from './Component/Service/Reservation';
import Predictor from './Component/Service/Predictor';
import PlaceOrderPremuim from './Component/Pricing/PlaceOrderPremuim';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
     
          <Navbar />
            <Alert className='aaa' />
            <Routes>
            <Route  path='/' element={<LandingPage/>} />

            <Route  path='/register' element={<Register/>} />
              <Route  path='/login' element={<Login/>} />
              <Route path="/dashboard" element={ <PrivateRoute><Dashboard/></PrivateRoute>}/>
              <Route path="/service" element={<Service/>}/>
              <Route path="/matchs" element={<Matchs/>}/>
              
              <Route path="/Reservation" element={ <PrivateRoute><Reservation/></PrivateRoute>}/>
              <Route path="/Predictor" element={ <PrivateRoute><Predictor/></PrivateRoute>}/>
              
              <Route path="/payment" element={ <PrivateRoute><PlaceOrderPremuim/></PrivateRoute>}/>
              
      
              
            </Routes>
    
      </Router>
    </Provider>
  );
};
export default App;
