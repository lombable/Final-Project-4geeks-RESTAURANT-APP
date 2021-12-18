import React from "react";
import Sidebar from "../components/Sidebar";
import { Context } from "../store/appContext";
import { useContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

const AdminTables = () => {

    const { store, actions } = useContext(Context);

    const history = useHistory();

    const params = useParams();

    useEffect(() => {
        actions.getTables()
    }, [])

    const tableRowGenerator = store.tables.map((table, i) => {

        return (
            <tr key={i}>
                <th scope="row">{table.table_id}</th>
                <td></td>
                <td></td>
                <td><button className="btn btn-danger btn-sm" onClick={() => actions.deleteTable(history, table.table_id)} role="button">X</button></td>
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
                            <main className="row overflow-auto">
                                <div className="col pt-4">
                                    <h3>Tables admin panel</h3>
                                    <p className="lead">From here, you will be able to add and eliminate tables.</p>
                                    <hr />
                                </div>
                                <div className="row">
                                    <div className="col pt-4 text-center">
                                        <Link className="mx-auto btn btn-success text-center justify-content-around" to="/table-creation" role="button">Add a table</Link>
                                    </div>
                                </div>
                                <div className="row text-center">
                                    <div className="col text-center pt-4">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Table Number #</th>
                                                    <th scope="col"></th>
                                                    <th scope="col"></th>
                                                    <th scope="col">Eliminate</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tableRowGenerator}
                                            </tbody>
                                        </table><br />
                                        {

                                            store.error !== null && (
                                                <div className="alert alert-success text-center alert-dismissible fade show" role="alert">
                                                    
                                                        <i className="fas fa-check-circle"></i>    {store.error}
                                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                  
                                                </div>)
                                        }
                                    </div>
                                </div>
                            </main>
                        </div></div></div></div>
        </>
    )
}

export default AdminTables;