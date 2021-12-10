import React from "react";
import Sidebar from "../components/Sidebar";
import { useContext } from "react";
import { Context } from "../store/appContext";

const TableView = () => {

    const { store, actions } = useContext(Context);

    const orderGenerator = store.orders.map((order) => {
        return (
            <div className="col-sm-4 py-2 mt-5">
                <div className="card py-3 text-center">
                    <div className="card-header">
                        Table number "id_number"
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{order.productName}</h5>
                        <p className="card-text"><img style={{ height: "100px", width: "100px" }} src={order.productImg}></img></p>
                    </div>
                    <div className="card-footer text-muted">
                        8 minutes ago
                    </div>
                </div>
            </div>)
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
                                <h3>Table number #</h3>
                                <p className="lead">Orders for table number #</p>
                                <hr />
                                <div className="row">
                                    {orderGenerator}
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default TableView;