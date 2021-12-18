import React from "react";
import Sidebar from "../components/Sidebar";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import { Link, useHistory, useParams } from "react-router-dom";

const KitchenOrders = () => {

    TimeAgo.addDefaultLocale(en)

    const { store, actions } = useContext(Context);

    const history = useHistory();

    const params = useParams();

    useEffect(() => {
        actions.getOrders()
    }, [])

    const orderGenerator = store.orders.map((order) => {
        return (
            <div className="col-sm-4 py-2 mt-5">
                <div className="card text-center">
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
                    <div className="card-footer text-muted">
                        <button type="button" className="btn btn-success btn-sm" onClick={() => actions.deleteOrder(history, order.order_id)}>Mark as delivered</button>
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
                                <h3>Pending orders</h3>
                                <p className="lead">Here you will find all information related to a specific table, what orders have been made and how long they were asked for.</p>
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

export default KitchenOrders;