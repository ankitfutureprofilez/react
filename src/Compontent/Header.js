import { Toaster } from 'react-hot-toast';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  function logout() {
    
    const d = JSON.stringify(
       localStorage.setItem("auth", "lkhj")
     )
     console.log(d)
  }

  return (

    <header>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand href="#home"><img src="logo192.png" alt="" width="50px" height="50px" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="pd-5 ml-5">

              <Link to="/" className="mr-5">
                <button>Regstation</button></Link>
              <Link to="/login" className="mr-5"><button>Login</button></Link>
              <Link to="/list" className="mr-5"><button>List</button></Link>
              <Link to="/tab"><button>Tab</button></Link>


            </Nav>
          </Navbar.Collapse>
          <button onClick={logout()}>Logout</button>
        </Container>
      </Navbar>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </header>
  );
}

export default Header;