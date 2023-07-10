import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Users from '../api/Users';
function List() {


    const [list, setList] = useState([]);
    const [listUpdate, setListUpdate] = useState();

    useEffect(() => {
        const main = new Users()
        const tresponses = main.usersget()
        tresponses.then((res) => {
            // console.log(res.data);
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
            <div className='row'>
                <div className='col-md-12 table-responsive '>
                    <Table hovestriped bordered hover>
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Username</th>
                                <th> Name</th>
                                <th>email</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Update</th>
                                <th>Delte</th>
                            </tr>
                        </thead>
                        <tbody>
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
                        </tbody>
                    </Table>
                </div>
            </div>

        </section>
    );
}

export default List;