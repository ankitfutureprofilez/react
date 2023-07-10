import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Users from '../api/Users';
import { Link } from 'react-router-dom';

function Reg() {
    const [username, setUsername] = useState("")
    const [password, setPasword] = useState("")
    const [name, setName] = useState("")
    const [confirmpasword, setCnfpas] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    function handleform(e) {
        const main = new Users();
        const formdata = { password, name, username, confirmpasword, email, phone }
        const response = main.register(formdata);
        response.then((res) => {
            if (res.data.status) {
                toast.success(res && res.data && res.data.msg);
            } else {
                toast.error(res && res.data && res.data.msg);
            }
            console.log(res);
        }).catch((err) => {
            const error = err.errors;
            console.log(error);

        });

    }

    return (
        <section id="reg">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6 mr-2">
                        <Form >
                            <h2 >Registration</h2>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text"
                                    value={username}
                                    onChange={(e) => { setUsername(e.target.value) }}
                                    placeholder="username" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">

                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                    placeholder="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text"
                                    value={password}
                                    onChange={(e) => { setPasword(e.target.value) }}
                                    placeholder="Pasword" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="text"
                                    value={confirmpasword}
                                    onChange={(e) => { setCnfpas(e.target.value) }}
                                    placeholder="Pasword" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number"
                                    value={phone}
                                    onChange={(e) => { setPhone(e.target.value) }}

                                    placeholder="Phone" required />
                            </Form.Group>

                            <Link to="/login">     <Button variant="primary" className='form-control' onClick={handleform}  >
                                Submit
                            </Button></Link>

                        </Form>
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
            </div>

        </section>

    );
}

export default Reg;