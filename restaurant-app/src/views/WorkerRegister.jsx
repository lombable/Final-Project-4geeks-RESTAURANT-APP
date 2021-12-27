import React from "react";
import "bootstrap";
import '../App.css';
import Navbar from '../components/Navbar'
import { useState, useContext } from "react";
import { Context } from '../store/appContext'
import { Link, useHistory } from "react-router-dom";


const ClientRegister = () => {

  const { store, actions } = useContext(Context)

  const history = useHistory();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    dob: '',
    city: '',
    rut: '',
    address: '',
    email: '',
    password: '', 
    phone_number: '',
    is_admin: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.register_client(formData, history)
  }

  const goBack = () => {
    history.goBack()
  }

  return (
    <>
      <section className="h-100" style={{ backgroundColor: "#d4d6d9" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/img4.jpg"
                      alt="Sample photo"
                      className="img-fluid rounded" />
                  </div>
                  <form className="col-xl-6" onSubmit={handleSubmit}>
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Worker Registration Form</h3>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1m" name="first_name" className="form-control form-control-lg" placeholder="Fulanito" onChange={handleChange} />
                            <label className="form-label" for="form3Example1m">First name</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" name="last_name" onChange={handleChange} placeholder="Pérez" id="form3Example1n" className="form-control form-control-lg" />
                            <label className="form-label" for="form3Example1n">Last name</label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1m1" name="rut" onChange={handleChange} placeholder="12.345.678-K" className="form-control form-control-lg" />
                            <label className="form-label" for="form3Example1m1">R.U.T number</label>
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="text" name="address" placeholder="Av. Manquehue Sur 350, Oficina 110, Las Condes, Región Metropolitana" id="form3Example8" className="form-control form-control-lg" onChange={handleChange} />
                        <label className="form-label" for="form3Example8">Home Address</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="text" name="phone_number" placeholder="+56 9 1234 5678" id="form3Example8" className="form-control form-control-lg" onChange={handleChange} />
                        <label className="form-label" for="form3Example8">Phone Number</label>
                      </div>

                      <div className="row">

                        <div className="col-md-6 mb-4">

                          <select className="select" name="city" onChange={handleChange} name="city">
                            <option value="">City</option>
                            <option value="santiago">Santiago Centro</option>
                            <option value="macul">Macul</option>
                            <option value="ñuñoa">Ñuñoa</option>
                          </select>

                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="text" name="dob" onChange={handleChange} id="form3Example9" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example9">Date of Birth</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example97" name="email" onChange={handleChange} className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example97">Email</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="form3Example97" name="password" className="form-control form-control-lg" onChange={handleChange} />
                        <label className="form-label" for="form3Example97">Password</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="form3Example97" name="confirmedPassword" className="form-control form-control-lg" onChange={handleChange} />
                        <label className="form-label" for="form3Example97">Please enter password again</label>
                      </div>

                      {
                        store.error !== null && (
                          <div className="alert alert-danger" role="alert">
                            {store.error}
                          </div>)
                      }

                      <div className="d-flex justify-content-end pt-3">
                      <button type="submit" className="btn btn-warning btn-small ms-2" onClick={goBack}>Go back</button>
                        <button type="submit" className="btn btn-success btn-small ms-2" onSubmit={handleSubmit}>Submit form</button>
                      </div>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></>
  )
}

export default ClientRegister;