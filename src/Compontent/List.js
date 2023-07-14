import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Users from '../api/Users';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
function List() {


    const [list, setList] = useState([]);
    const [listUpdate, setListUpdate] = useState();

    useEffect(() => {
        const main = new Users()
        const tresponses = main.usersget()
        tresponses.then((res) => {
          console.log(res.data);
            setList(res.data.data)
        }).catch((err) => {
            console.log(err);
        });

    }, [listUpdate])

    async function delte(e) {
        const main = new Users()
        const tresponse = main.deleteUser(e)
        //console.log(tresponse)
        setListUpdate(tresponse)
    }
    return (
        <section id="list">
            <div className="container">
                <div className='row'>
                    <div className='table-responsive border boder-color:black  border-Radius:20'>
                        <h2 >User Lists</h2>

                        <MDBTable>
                            <MDBTableHead  >
                                <tr>
                                    <th>S. NO</th>
                                    <th>USERNAME</th>
                                    <th> NAME</th>
                                    <th>EMAIL</th>
                                    <th>PHONE</th>
                                    <th>STATUS</th>
                                    <th>UPDATE</th>
                                    <th>DELETE</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>

                                {list && list.map((sorc, index) => {
                                    return (
                                        <tr key={sorc._id}>
                                            <td>{index + 1}</td>
                                            <td>{sorc.username}</td>
                                            <td>{sorc.name}</td>
                                            <td>{sorc.email}</td>
                                            <td>{sorc.phone}</td>
                                            <td>{sorc.status}</td>
                                            <td>

                                                <Link to={`/updatedata?id=${sorc._id}`}><i class="bi bi-pencil-square"></i></Link>

                                            </td>
                                            <td >
                                                <button onClick={() => delte(sorc._id)}>
                                                    <i class="bi bi-trash-fill"></i></button>
                                            </td>
                                        </tr>
                                    );
                                })}

                            </MDBTableBody>
                        </MDBTable>
                      
                    </div>
                </div>
            </div>


        </section>
    );
}

export default List;