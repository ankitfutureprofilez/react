import '../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reg from './Compontent/Reg';
import Header from './Compontent/Header';
import Footer from './Compontent/Footer';
import Login from './Compontent/Login';
import List from './Compontent/List';
import Update from './Compontent/Update';
import Tab from './Compontent/Tab';
import PrivateRoute from './api/PrivateRouter';
import { Context } from './Compontent/Context';
import { useState } from 'react';
import Admin from './Compontent/Admin';
import Product from './Compontent/Product';
import Produclist from './Compontent/ProductList';
import Productshow from './Compontent/Productshow';

function App() {
  // const isAuthenticated = true;
  const [loginname, setLoginname] = useState(localStorage.getItem('loginname'))
  const [loginstatus, setLoginstatus] = useState(localStorage.getItem('loginstatus'))

  return (
    <>
      <Context.Provider value={{ loginname, setLoginname, setLoginstatus, loginstatus }}>
        <Router>
          <Header />

          <Routes>
            {loginstatus ?
              <>

                <Route path='/tab'
                  element={
                    <PrivateRoute>
                      <Tab />
                    </PrivateRoute>
                  }
                ></Route>

                <Route path='/list'
                  element={
                    <PrivateRoute>
                      <List />
                    </PrivateRoute>
                  }
                ></Route>
                <Route path='/updatedata' element={<Update />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
                <Route path='/product' element={<Product />}></Route>
                <Route path='/productlist' element={<Produclist />}></Route>
                <Route path='/Products' element={<Productshow />}></Route>
              </>
              :
              <>

                <Route path='/login' element={<Login />}></Route>
                <Route path='/' element={<Reg />}></Route>

              </>
            }

          </Routes>
          <Footer />

        </Router>
      </Context.Provider>
    </>
  );
}

export default App;