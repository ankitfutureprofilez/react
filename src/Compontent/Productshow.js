import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Users from '../api/Users';
function Productshow() {
    const [Product, setProduct] = useState([]);


    useEffect(()=>{
        const main=new Users();
        const response=main.userproductshow()
        response.then((res)=>{
            console.log(res.data)
                setProduct(res.data)
            
        })
    })
    return ( 
        <section id="users">
        <div className="Container">
            <div className="row">
                <h2>Users Pannel</h2>
                <div className='container mr-2 ml-2'>
                <div className='col-md-3'>
                        
                        </div>
                        <div className='col-md-12'>
                        <Table hover>
                        <thead>
                            <tr>
                                <th>S.NO.</th>
                                <th>Img</th>
                                <th></th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                        </div>
                    <div className='col-md-3'>

                    </div>
                   
                </div>

            </div>

        </div>

    </section>
     );
}

export default Productshow;