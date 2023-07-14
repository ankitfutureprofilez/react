import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Left from './Left';
import { useState } from 'react';
import Users from '../api/Users';
function Product() {
    const [emi, setEmi] = useState(0);

    const [Product, setProduct] = useState({
        name: "",
        desc: "",
        price: "",
        year: "",
        rating: "",

    });

    const handelemi = (e) => {
        setEmi(e.target.value);
        console.log("rmi", e.target.value);
    }

    const handelinput = (e) => {
        let valueattr = e.target.value
        let nameattr = e.target.name
        setProduct({ ...Product, [nameattr]: valueattr });
        console.table(Product);
    }

    async function hadelform(e) {
        const main = new Users();
        const fdata = new FormData();
        fdata.append("name", Product.name);
        fdata.append("desc", Product.desc);
        fdata.append("year", Product.year);
        fdata.append("emi", emi);
        fdata.append("rating", Product.rating)
        fdata.append("price", Product.price)

        const resp = main.products(fdata)
        resp.then((res) => {
            //  console.log(res);


        }).catch((err) => {
            console.log(err);
        });
    }


    return (
        <section id="prod">
            <Container>
                <Row>
                    <Col sm={2} ><Left /></Col>
                    <Col sm={10}>
                        <h2>Add Product Here</h2>
                        <label className='mt-2 mb-2 ' >Product Img</label>
                        <Form.Control
                            required
                            value={"https://seeklogo.com/free-vector-logos/img"}
                        />
                        <label className='mt-2 mb-2 ' >Product Name</label>
                        <Form.Control
                            required
                            type="text"
                            name={"name"}
                            placeholder="Product Name"
                            onChange={handelinput}
                        />

                        <label className='mt-2 mb-2 '>Product Desc</label>
                        <Form.Control
                            required
                            name={"desc"}
                            type="text"
                            placeholder="Product Desc"
                            onChange={handelinput}

                        />
                        <label className='mt-2 mb-2 '>Product Price</label>
                        <Form.Control
                            required
                            name={"price"}
                            type="number"
                            placeholder="Product Price"
                            onChange={handelinput}

                        />
                        <label className='mt-2 mb-2 '>Product Year</label>
                        <Form.Control
                            required
                            type="number"
                            onChange={handelinput}
                            name={"year"}
                            placeholder="Product YEAR" />
                        <label className='mt-2 mb-2 '>Product EMI</label>
                        <Form.Select onChange={handelemi} aria-label="Default select example" >
                            <option>Open this select menu</option>
                            <option value={1} >Enable</option>
                            <option value={0}>Disable</option>
                        </Form.Select>

                        <label className='mt-2 mb-2 '>Product Rating</label>
                        <Form.Control
                            required
                            type="number"
                            name={"rating"}
                            placeholder="Product Rating"
                            onChange={handelinput}

                        />
                        <button onClick={hadelform} className='btn btn-success mt-2  form-control'>Submit</button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Product;