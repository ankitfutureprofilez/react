import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Left from './Left';
import Table from 'react-bootstrap/Table';

import { useEffect, useState } from 'react';
import Users from '../api/Users';
import Produpdate from './Produpdate';
function Produclist() {
 
  const [list, setList] = useState([]);
  const [listUpdate, setListUpdate] = useState();

  useEffect(() => {
    const main = new Users()
    const resp = main.productshow()
    resp.then((res) => {
    //  console.log(res.data);
      setList(res.data.data)
    })
  }, [listUpdate])

  async function deleteProduct(e) {
    const main = new Users()
    const response = main.productdelte(e)
    response.then((res) => {
      //  console.log(res);
    //  console.log(res)
      setListUpdate(res)

    }).catch((err) => {
      console.log(err);
    });


  }



  return (
    <section id="listing">
      <Container>
        <Row>
          <Col sm={2}>
            <Left />
          </Col>
          <Col sm={10}>
            <div>
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>S.No</th>

                    <th>Name</th>
                    <th>Desc</th>
                    <th>Price</th>
                    <th>Year</th>
                    <th>EMI</th>
                    <th>Rating</th>
                    <th>Delete</th>
                    <th>Update</th>
                  </tr>
                </thead>
                <tbody>
                  {list && list.map((res, key) => (
                    <tr key={res._id} >
                      <td>{key + 1}</td>
                      <td>{res.name}</td>
                      <td>{res.desc}</td>
                      <td>{res.price}</td>
                      <td>{res.year}</td>
                      <td>{res.emi}</td>
                      <td>{res.rating}</td>
                      <td> <button onClick={() => deleteProduct(res._id)}>
                        <i class="bi bi-trash-fill"></i></button></td>
                      <td>
                        <Produpdate id={res._id} data={res} />

                      </td>

                      <td></td>
                    </tr>

                  ))}

                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Produclist;