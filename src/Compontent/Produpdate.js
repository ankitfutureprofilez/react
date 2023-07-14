import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Users from '../api/Users';

function Produpdate(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { data } = props;


    const [Product, setProduct] = useState({
        name: data.name,
        desc: data.desc,
        price: data.price,
        year: data.year,
        rating: data.rating
    });


    // ...

    function patch() {
        const main = new Users();
        const fdata = new FormData();
        fdata.append("name", Product.name);
        fdata.append("desc", Product.desc);
        fdata.append("year", Product.year);
        fdata.append("rating", Product.rating);
        fdata.append("price", Product.price);
        const response = main.productupdate(data._id, fdata);
        response
            .then((res) => {
                console.table(res.data);
                handleClose();
                setShow(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    // ...

    const handleInputs = (e) => {
        let valueattr = e.target.value;
        let nameattr = e.target.name;
        setProduct({ ...Product, [nameattr]: valueattr });
    }





    return (
        <section id="update">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <>
                            <Button variant="primary" onClick={handleShow}>
                                Update
                            </Button>

                            <Modal show={show} onHide={handleClose} animation={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Product Update</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <label className='mt-2 mb-2 ' >Product Img</label>
                                    <Form.Control
                                        value="IMG"
                                        onChange={handleInputs}
                                        type="text"
                                        enctype="multipart/form-data"
                                        placeholder="Product Img" />
                                    <label className='mt-2 mb-2 ' >Product Name</label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        defaultValue={Product.name}
                                        onChange={handleInputs}
                                        placeholder="Product Name"
                                    />
                                    <label className='mt-2 mb-2 '>Product Desc</label>
                                    <Form.Control
                                        type="text" defaultValue={Product.desc}
                                        name={"desc"}
                                        onChange={handleInputs}
                                        placeholder="Product Desc" />
                                    <label className='mt-2 mb-2 '>Product Price</label>
                                    <Form.Control
                                        type="number"
                                        name={"price"}
                                        defaultValue={Product.price}
                                        onChange={handleInputs}
                                        placeholder="Product Price" />
                                    <label className='mt-2 mb-2 '>Product Year</label>
                                    <Form.Control
                                        type="number"
                                        name={"year"}
                                        defaultValue={Product.year}

                                        onChange={handleInputs}
                                        placeholder="Product YEAR" />


                                    <label className='mt-2 mb-2 '>Product Rating</label>
                                    <Form.Control
                                        type="number"
                                        name={"rating"}
                                        defaultValue={Product.rating}

                                        onChange={handleInputs}
                                        placeholder="Product Rating" />


                                    <button onClick={patch} className='btn btn-success mt-2  form-control'>Submit</button>


                                </Modal.Body>
                                <Modal.Footer>

                                </Modal.Footer>
                            </Modal>
                        </>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Produpdate;