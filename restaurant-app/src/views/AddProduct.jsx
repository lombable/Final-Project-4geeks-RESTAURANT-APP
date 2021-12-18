import React from "react";
import Sidebar from "../components/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";

const AddProducts = () => {

    const { actions, store } = useContext(Context);

    const history = useHistory();

    const [formData, setFormData] = useState({
        product_name: "",
        category_id: "",
        product_price: "",
        product_description: "",
        is_disable: "",
        uploaded_img: null,
    });

    const handleImg = (e) => {
        let uploaded_img = e.target.files[0]
        setFormData({ ...formData, uploaded_img })
    }

    const handleChange = (e) => {
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
        e.preventDefault();
        actions.addProduct(formData, history)
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

                                <p className="h4 mb-4 text-center">Add a Product</p>

                                <label for="textInput">Name of the product</label>
                                <input type="text" id="productName" name="product_name" className="form-control mb-4" placeholder="Pizza Margharita" onChange={handleChange} />

                                <label for="textInput">Price</label>
                                <input type="text" id="productPrice" name="product_price" className="form-control mb-4" placeholder="$ 6.500 clp" onChange={handleChange} />

                                <label for="productCategory">Category of the new product:</label><br /><br />
                                <select className="browser-default custom-select mb-4" name="category_id" id="productCategory" onChange={handleChange}>
                                    <option value="" disabled="">Category</option>
                                    <option value="1">Drinks</option>
                                    <option value="2">Pizzas</option>
                                    <option value="3">Pastas</option>
                                    <option value="3">Burgers</option>
                                    <option value="4">Meat</option>
                                    <option value="5">Desserts</option>
                                </select>
                                <br />
                                <label for="textarea">Description of the product</label>
                                <textarea id="textarea" className="form-control mb-4" name="product_description" placeholder="Description" onChange={handleChange}></textarea>

                                <div className="custom-control custom-checkbox mb-4">
                                    <input type="checkbox" className="custom-control-input" checked={formData.is_disable} name="is_disable" onClick={handleClick} id="checkbox" />
                                    <label className="custom-control-label" for="checkbox"> Is it available right now?</label>
                                </div>


                                {/* Upload an image button */}
                                <label for="formFileSm" className="form-label">Upload an image</label>
                                <input className="form-control form-control-sm" id="formFileSm" type="file" accept="image/*" onChange={(e) => handleImg(e)} />
                                <br /><br />

                                {
                                    store.error !== null && (
                                        <div className="alert alert-danger" role="alert">
                                            {store.error}
                                        </div>)
                                }
                                <div className="d-grid gap-2">
                                    <button className="btn btn-success" type="submit">Add product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddProducts;