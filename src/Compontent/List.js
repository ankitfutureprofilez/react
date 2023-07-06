import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Api from '../api/Api';
import { Link, useParams } from 'react-router-dom';
import Users from '../api/Users';
function List() {


    const [list, setList] = useState([]);
    const _id = useParams();
    const [listUpdate, setListUpdate] = useState();

useEffect((e)=>{
const main=new Users()
const tresponses=main.getusers(e)
tresponses.then((res)=>{
// console.log(res.data.data);
 setList(res.data.data)
}).catch((err) => {
    //console.log(err);
});

},[listUpdate])
   // useEffect(() => {
    //    Api.get('regapi/listdata').then((response) => {
     //       setList(response.data.data)
    //    })
   // }, [listUpdate])

   // console.log(list)

    async function delte(e) {
        const main = new Users()
        const tresponse = main.deleteUser(e)
        //console.log(tresponse)
        setListUpdate(tresponse)
    }


    // if (!list) return "No post!"
    //  function deletePost() {
    //  client
    //   .delete("")
    //     .then(() => {
    ///      alert("Post deleted!");
    /////       setPost(null)
    ///     });
    // }

    // if (!list) return "No post!"
    // }
    //  React.useEffect(() => {
    //    client.get("/1").then((response) => {
    //   setPost(response.data);
    //   });
    // }, []);

    return (
        <section id="list">
            <div className='row'>
                <div className='col-md-12'>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Username</th>
                                <th> Name</th>
                                <th>email</th>
                                <th>Phone</th>
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
                                        <td>
                                            <Link to="/updatedata">"Update</Link>
                                                Update
                                        </td>
                                        <td >
                                            <button onClick={() => delte(sorc._id)}>Delete</button>
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