import React from "react";
import Sidebar from "../components/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";

const UserEdit = () => {

    const { actions, store } = useContext(Context);

    const [formData, setFormData] = useState({
        product_name: "",
        category_id: "",
        product_price: "",
        product_description: "",
        is_disable: false,
    });

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleClick = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked
        });
    }

    const handleSubmit = (e) => {
        console.log(formData)
        e.preventDefault();
        actions.addProduct(formData)
    }

    return (
        <>
            <div className="container-fluid overflow-hidden">
                <div className="row vh-100 overflow-auto">
                    <div className="col-4 col-sm-3 col-xl-2 px-sm-2 px-0 bg-light d-flex sticky-top">
                        <Sidebar />
                    </div>
                    <div className="col-md-8">
                        <div className="mx-4 col d-flex flex-column h-sm-100">
                            <form className="border border-light pt-5" onSubmit={handleSubmit}>

                                <p className="h4 mb-4 text-center">Edit an user</p>

                                <label for="textInput">First Name</label>
                                <input type="text" id="productName" name="first_name" className="form-control mb-4" onChange={handleChange} />

                                <label for="textInput">Last Name</label>
                                <input type="text" id="productPrice" name="last_name" className="form-control mb-4" onChange={handleChange} />

                                <label className="form-label" for="form3Example1m1">R.U.T number</label>
                                <input type="text" id="form3Example1m1" name="rut" onChange={handleChange} className="form-control form-control-lg" />

                                <label className="form-label" for="form3Example8">Home Address</label>
                                <input type="text" name="address" id="form3Example8" className="form-control form-control-lg" onChange={handleChange} />

                                <label className="form-label" for="form3Example8">Phone Number</label>
                                <input type="text" name="phone_number" placeholder="+56 9 1234 5678" id="form3Example8" className="form-control form-control-lg" onChange={handleChange} /><br />

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="is_admin" checked={formData.is_admin} id="flexCheckDefault" onChange={handleClick} />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Is user an admin?
                                    </label>
                                </div>
                                <br />
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="is_active" checked={formData.is_active} id="flexCheckDefault" onChange={handleClick} />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Is user active?
                                    </label>
                                </div>
                                <br />
                                <label className="form-label" for="form3Example9">Date of Birth</label>
                                <input type="text" name="dob" onChange={handleChange} id="form3Example9" className="form-control form-control-lg" />

                                <label className="form-label" for="form3Example97">Email</label>
                                <input type="text" id="form3Example97" name="email" onChange={handleChange} className="form-control form-control-lg" />

                                <label className="form-label" for="form3Example97">Password</label>
                                <input type="password" id="form3Example97" name="password" className="form-control form-control-lg" onChange={handleChange} />

                                <label className="form-label" for="form3Example97">Please enter password again</label>
                                <input type="password" id="form3Example97" name="confirmedPassword" className="form-control form-control-lg" onChange={handleChange} />
                                <br />
                                {
                                    store.error !== null && (
                                        <div className="alert alert-danger" role="alert">
                                            {store.error}
                                        </div>)
                                }
                                <br />
                                <div className="d-grid gap-2">
                                    <button className="btn btn-success" type="submit">Save changes</button>
                                </div>
                                <br />
                            </form>
                            <div className="d-grid gap-2">
                                <button className="btn btn-danger" type="submit">Erase user</button>
                            </div>
                            <br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserEdit;