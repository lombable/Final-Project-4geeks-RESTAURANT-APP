import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const ClientLogin = () => {

    const { actions, store } = useContext(Context);

    const history = useHistory();

    const [table_id, setTable_Id] = useState("");

    const handleChange = (e) => {

        setTable_Id({
            ...setTable_Id,
          table_id : e.target.value,
          
        },);
      }


    return (<section className="vh-100 gradient-custom">
        <form className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                        <div className="card-body p-5 text-center">

                            <div className="mb-md-5 mt-md-4 pb-5">

                                <h2 className="fw-bold mb-4 text-uppercase">Login</h2>
                                <p className="text-white-50 mb-5">Please enter your table number or scan de QR code.</p>

                                <div className="form-outline form-white mb-4">
                                    <input type="text" className="form-control form-control-lg"  onChange={handleChange} name="table_id" />
                                    <label className="form-label">Table number</label>
                                </div>


                                <p className="small mb-5 pb-lg-2"><Link className="text-white-50" to="#!">Want your bill in your email? Sign in with Google instead</Link></p>

                                <Link to={"/user/table-" + table_id} className="btn btn-outline-light btn-lg px-5">Go to your table</Link>

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