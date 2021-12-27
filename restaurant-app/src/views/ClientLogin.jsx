import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const ClientLogin = () => {

    const { actions, store } = useContext(Context);

    const history = useHistory();

    const [tableId, setTableId] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        history.push("/" + tableId)
    }

    return (
        <section className="vh-100 gradient-custom" style={{ backgroundColor: "#d4d6d9" }}>
            <form className="container py-5 h-100" onSubmit={() => onSubmit(tableId, history)}>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-4 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your table number or scan de QR code.</p>

                                    <div className="form-outline form-white mb-4">
                                        <input type="text" className="form-control form-control-lg" onChange={(e) => setTableId(e.target.value)} name="tableId" />
                                        <label className="form-label">Table number</label>
                                    </div>


                                    <Link to={"/user/table-" + tableId} className="btn btn-outline-light btn-lg px-5">Go to your table</Link>
                                    <br /><br />
                                    <Link to="/"><button className="btn btn-outline-light btn-lg px-5">Go back</button></Link>

                                    <div className="d-flex justify-content-center text-center mt-4 pt-1">

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>);
}

export default ClientLogin;