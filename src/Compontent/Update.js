import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Users from '../api/Users';
function Update() {
    const[list,setList]=useState('')
useEffect((e)=>{
    const main=new Users()
const tresponses=main.updateusers(e)
tresponses.then((res)=>{
     console.log(res.data.data);
 setList(res.data.data)
}).catch((err) => {
    console.log(err);
});
},[])


    const [data, setData] = useState({
        username: "",
        name: "",
        email: "",
        phone: ""
    });

    const handleInputs = (e) => {
        let valueattr = e.target.value;
        let nameattr = e.target.name;
        setData({ ...data, [nameattr]: valueattr });
        console.table(data);
    }
  function handleform (e){
    e.preventDefault()
  }
    return (
        <section id="update">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                    <Form>
                <Form.Group className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    uername
                    </Form.Label>

                    <Form.Control name="username" onChange={handleInputs} type="text" placeholder="email/username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
               name
                    </Form.Label>

                    <Form.Control name="name" onChange={handleInputs} value={data.password} type="text" placeholder="name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                 email
                    </Form.Label>

                    <Form.Control name="email" onChange={handleInputs} value={data.password} type="text" placeholder="email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                 Phone
                    </Form.Label>

                    <Form.Control name="phone" onChange={handleInputs} value={data.password} type="number" placeholder="phone" />

                </Form.Group>
                <Button variant="primary" className='form-control' onClick={handleform} >
                    Submit
                </Button>
            </Form>
                    </div>
                    <div className='col-md-3'></div>

                </div>
            </div>
          
        </section>
    );
}

export default Update;