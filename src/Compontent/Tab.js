import { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Users from '../api/Users';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
function Actives() {

    const [listUpdate, setListUpdate] = useState();

    const [key, setKey] = useState(1);
    const [list, setList] = useState([]);

    useEffect(() => {
        const main = new Users()
        const tresponses = main.getusers({ key: key })
        tresponses.then((res) => {
            //    console.log(res.data);
            setList(res.data.data)
        }).catch((err) => {
            //console.log(err);
        });
    }, [listUpdate, key])



    async function delte(e) {
        const main = new Users()
        const tresponse = main.deleteUser(e)
        //console.log(tresponse)
        setListUpdate(tresponse)
    }
    return (
        <section id="tab">
            <div className='conatiner'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2>Lists Active And Delete Users</h2>
                        <div className='mr-2 ml-2'>
<div className='container'>
<Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
            
                            >

                                <Tab eventKey={1} title="Active Users">
                                    <div className='col-md-12 table-responsive py-4 my-4'>
                                        <div className='mr-2 ml-2'>
                                            <Table hover>
                                                <thead>
                                                    <tr>
                                                        <th>S.NO</th>
                                                        <th>USERNAME</th>
                                                        <th> NAME</th>
                                                        <th>EMAIL</th>
                                                        <th>PHONE</th>
                                                        <th>STATUS</th>
                                                        <th>UPDATE</th>
                                                        <th>DELETE</th>
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
                                                                    <button >

                                                                        <Link to={`/updatedata?id=${sorc._id}`}><i class="bi bi-pencil-square"></i></Link>
                                                                    </button>
                                                                </td>
                                                                <td >
                                                                    <button onClick={() => delte(sorc._id)}><i class="bi bi-trash-fill"></i></button>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </Table>
                                        </div>

                                    </div>

                                </Tab>
                                <Tab eventKey={0} title="Deiete Users">
                                    <div className='col-md-12 table-responsive py-4 my-4'>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>S.no</th>
                                                    <th>Username</th>
                                                    <th> Name</th>
                                                    <th>email</th>
                                                    <th>Phone</th>
                                                    <th>Status</th>

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
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab>

                            </Tabs>
</div>
                            

                        </div>
                    </div>
                </div>


            </div>
        </section>


    );
}

export default Actives;