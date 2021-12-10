import React from "react";
import Sidebar from "../components/Sidebar";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const AdminPanel = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getTables()
    }, [])

    const tableGenerator = store.tables.map((table, i) => {
        return (
            <a href="/table-view/id" key={i} className="col-sm-4 py-2 mt-5">
                <div className="card text-center" style={{ width: "100%" }}>
                    <img src="../img/restaurant-table.jpg" className="card-img-top mx-auto tablesimg" alt="table" />
                    <div className="card-body">
                        <p className="card-text text-center align-center">Mesa número {table.table_id}</p>
                    </div>
                </div>
            </a>)
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
                                <h3>Main view</h3>
                                <p className="lead">Here you will find all available tables and what is going on with them.</p>
                                <hr />
                                <div className="row">
                                    {tableGenerator}
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default AdminPanel;