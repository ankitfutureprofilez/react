import '../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reg from './Compontent/Reg';
import Header from './Compontent/Header';
import Footer from './Compontent/Footer';
import Login from './Compontent/Login';
import List from './Compontent/List';
import Update from './Compontent/Update';

function App() {
  return (

<Router>
<Header/>
<Routes>
  <Route path='/' element={<Reg/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
<Route path="/list" element={<List/>}></Route>
<Route path='/updatedata'element={<Update/>}></Route>
  </Routes>
  <Footer/>
</Router>
  );
}

export default App;
