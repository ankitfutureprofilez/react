import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Users from '../api/Users';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
function Update() {

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const [list, setList] = useState('');

    const [data, setData] = useState({
        username: list.username ? list.username : '',
        name: list.name ? list.name : '',
        email: list.email ? list.email : '',
        phone: list.phone ? list.phone : '',
    });

    function patch() {
        const main = new Users()
        const tresponses = main.updateusersdata(id,list)
        tresponses.then((res) => {
          //  console.log(res);
        
            toast.success(res.data.msg);
        }).catch((err) => {
            console.log(err);
        });
    }


    const handleInputs = (e) => {
        let valueattr = e.target.value;
        let nameattr = e.target.name;
        //  let valueatt=e.target.value;
        //   let phoneattributr= e.target.phone;
        setList({ ...list, [nameattr]: valueattr });
        ///   setData({ ...data, [phoneattributr]: valueatt });

        console.table(list);
    }



    function getuserdata(e) {
        const main = new Users()
        const tresponses = main.getSingleUser(id)
        tresponses.then((res) => {
           // console.log(res.data.data);
            setList(res.data.data)
        }).catch((err) => {
            console.log(err);
        });
    }
    useEffect(() => {
        getuserdata( );
    //    console.log(getuserdata(data,setData ))
    }, []);


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

                                <Form.Control name="username"
                                    value={list.username}
                                    onChange={handleInputs} type="text" placeholder="email/username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    name
                                </Form.Label>

                                <Form.Control name="name"
                                    value={list.name}
                                    onChange={handleInputs} type="text" placeholder="name" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    email
                                </Form.Label>

                                <Form.Control name="email" onChange={handleInputs} value={list.email} type="text" placeholder="email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Phone
                                </Form.Label>

                                <Form.Control name="phone"
                                    value={list.phone} onChange={handleInputs} type="number" placeholder="phone" />

                            </Form.Group>
                            <Button variant="primary" className='form-control' onClick={patch} >
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