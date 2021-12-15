import React from "react";
import Sidebar from "../components/Sidebar";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from 'react-time-ago'

const TableView = () => {

    const { store, actions } = useContext(Context);

    const params = useParams();

    useEffect(() => {
        actions.getSingleTable(params.id)
    }, [])

    TimeAgo.addDefaultLocale(en)

    const orderGenerator = store.singleTable?.requested_products.map((order, i) => {
        return (
            <div className="col-sm-4 py-2 mt-5" key={i}>
                <div className="card py-3 text-center">
                    <div className="card-header">
                        Table number {order.table_id}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{order.product_name}</h5>
                        <p className="card-text">
                            <img style={{ height: "100px", width: "100px" }} src={order.aws_path}></img>
                        </p>
                    </div>
                    <div className="card-footer text-muted">
                    Order created <ReactTimeAgo date={order.order_created} locale="en-US"/>
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
                                <h3>Table number {params.id}</h3>
                                <p className="lead">Orders for table number {params.id}</p>
                                <hr />
                                <div className="row">
                                    <div className="col pt-4 text-center">
                                        <Link className="mx-auto btn btn-success text-center justify-content-around" to={"/add-order/table/" + params.id} role="button">Add an order</Link>
                                    </div>
                                </div>
                                {
                                    store.singleTable?.requested_products.length !== 0 ?
                                        <div className="row">
                                            {orderGenerator}
                                        </div>
                                        :
                                        <h1>No pending products</h1>
                            }

                            </main>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default TableView;