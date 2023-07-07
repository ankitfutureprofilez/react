import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Users from '../api/Users';

function Login() {

    const [data, setData] = useState({
        password: "",
        username: "",
    });

    const handleInputs = (e) => {
        let valueattr = e.target.value;
        let nameattr = e.target.name;
        setData({ ...data, [nameattr]: valueattr });
        console.table(data);
    }

    async function handleforms(e) {
        const main = new Users();
        const resp = main.login(data);
        resp.then((res) => {
            if (res.data.status) {
                toast.success(res && res.data && res.data.msg);
                const d =JSON.stringify(res && res.data.user.username)
                console.log(d)
                localStorage.setItem("auth", d);
                
            } else {
                toast.error(res && res.data && res.data.msg);
            }
        }).catch((err) => {
            console.log(err);
        });
    }



    return (
        <section id="form">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6">
                        <Form>
                            <Form.Group className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Email/uername
                                </Form.Label>

                                <Form.Control name="username"  onChange={handleInputs} type="text" placeholder="email/username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Password
                                </Form.Label>

                                <Form.Control name="password"  onChange={handleInputs} value={data.password} type="password" placeholder="Password" />

                            </Form.Group>

                            <Button variant="primary" className="form-control" onClick={handleforms}  >
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div className="col-md-3">
                  
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;