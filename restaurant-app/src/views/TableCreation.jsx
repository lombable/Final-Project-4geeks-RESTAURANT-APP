import React from "react";
import { useContext } from 'react';
import { Context } from "../store/appContext";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const TableCreation = () => {

    const history = useHistory();

    const { actions, store } = useContext(Context);

    const [formData, setFormData] = useState({
        bills_id: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        actions.addTable(formData, history);
    }

    return (
        <div className="container-fluid overflow-hidden">
            <div className="row vh-100 overflow-auto">
                <div className="col-4 col-sm-3 col-xl-2 px-sm-2 px-0 bg-light d-flex sticky-top">
                    <Sidebar />
                </div>
                <div className="col-md-8">
                    <div className="mx-4 col d-flex flex-column h-sm-100">
                        <form className="text-center border border-light p-5" onSubmit={onSubmit}>

                            <p className="h4 mb-4">Table Creation</p>


                            <div className="form-outline">
                                <label className="form-label" for="typeNumber">Please enter the number of the new table:</label>
                                <input type="text" name="bills_id" id="typeNumber" className="form-control" onChange={handleChange} />
                            </div>

                            <div className="pt-3">
                                <button className="btn btn-success" type="submit">
                                    Create new table
                                </button>
                            </div>
                            <br/>
                            {
                                store.error !== null && (
                                    <div className="alert alert-danger" role="alert">
                                        {store.error}
                                    </div>)
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableCreation;