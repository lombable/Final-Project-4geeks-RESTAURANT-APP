import React from "react";
import Sidebar from "../components/Sidebar";
import { Context } from "../store/appContext";
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Users = () => {

    const { store, actions } = useContext(Context);

    const params = useParams();

    useEffect(() => {
        actions.getUsers()
    }, [])

    const tableRowGenerator = store.users.map((user, i) => {
        return (
            <tr key={i}>
                <th scope="row">{user.email}</th>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.is_active ? "✓" : "X"}</td>
                <td>{user.is_staff ? "✓" : "X"}</td>
                <td><Link className="btn btn-danger btn-sm" to={"/user-edit/" + user.id} role="button">Edit</Link></td>
            </tr>
        )
    })


    return (
        <>
            <div className="container-fluid overflow-hidden">
                <div className="row vh-100 overflow-auto">
                    <div className="col-4 col-sm-3 col-xl-2 px-sm-2 px-0 bg-light d-flex sticky-top">
                        <Sidebar />
                    </div>
                    <div className="col-md-8">
                        <div className="mx-4 col d-flex flex-column h-sm-100">
                            <main className="row overflow-auto pt-4">
                                <h3>Users</h3>
                                <p className="lead">Here you will find all available users and information on their current status.</p>
                                <hr />
                                <div className="row">
                                <div className="col py-4 text-center">
                                        <Link className="mx-auto btn btn-success text-center justify-content-around" to="/worker-register" role="button">Add a new user</Link>
                                    </div>
                                </div>
                                <div className="row text-center">
                                    <div className="col text-center pt-4">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">E-mail</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Last Name</th>
                                                    <th scope="col">Active</th>
                                                    <th scope="col">Staff</th>
                                                    <th scope="col">Edit</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tableRowGenerator}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Users;