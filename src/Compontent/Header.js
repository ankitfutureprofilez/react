import { Toaster } from 'react-hot-toast';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './Context';

function Header() {

  const { loginname, setLoginname, loginstatus, setLoginstatus } = useContext(Context)
  const navigate = useNavigate();

  function handlelogout(e) {
    localStorage.removeItem('loginname')
    setLoginname(localStorage.getItem('loginname'))
    localStorage.removeItem('loginstatus')
    setLoginstatus(localStorage.getItem('loginstatus'))
    navigate('/login')
  }
  return (
    <section id="header">
      <div className='container'>
        <div className='row'>
          <header className='mt-2'>



            <Navbar bg="white" data-bs-theme="dark">
              <Container>

                <Navbar.Brand href="#home"><img src='images.jpg' width="50px" height="50px" /></Navbar.Brand>
                
                <Nav className="me-auto mr-2 ml-2">
                  {loginstatus ?
                    <>
       <Link to="/list" className='text-dark font-bold  ml-3 mr-3' ><button>Users</button></Link>
                  
                  
                      <Link to="/tab" className='text-dark font-bold  ml-3 mr-3'>
                 <button>
                 Listing
                 </button>
                </Link>

                    </>
                    :
                    <>
                      <Link className='text-dark font-bold ml-3 mr-3' to="/login">Login</Link>
                      <Link className='text-dark font-bold  ml-3 mr-3' to="/">Registration</Link>
                    </>
                  }
                </Nav>
                {loginstatus?
                <>  <div className='rightactions d-flex align-items-center' >
                <strong className='me-3 d-inline-block text-capitalize'>{loginname}</strong>
                 <button onClick={(e) => { handlelogout(e) }}
                className='btn btn-danger' ><i class="bi bi-box-arrow-right  "></i></button> 
               </div>
                </>
              
                : <>
                </>
                }
              </Container>
            </Navbar>
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
          </header>
        </div>
      </div>
    </section>

  );
}

export default Header;