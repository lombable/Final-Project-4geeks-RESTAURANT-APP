import React from "react";
import Sidebar from "../components/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";

const ProductEdit = () => {

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

                                <p className="h4 mb-4 text-center">Edit a Product</p>

                                <label for="textInput">Name of the product</label>
                                <input type="text" id="productName" name="product_name" className="form-control mb-4" placeholder="Pizza Margharita" onChange={handleChange} />

                                <label for="textInput">Price</label>
                                <input type="text" id="productPrice" name="product_price" className="form-control mb-4" placeholder="$ 6.500 clp" onChange={handleChange} />

                                <label for="productCategory">Category of the new product:</label><br /><br />
                                <select className="browser-default custom-select mb-4" name="category_id" id="productCategory" onChange={handleChange}>
                                    <option value="" disabled="">Category</option>
                                    <option value="drinks">Drinks</option>
                                    <option value="pizzas">Pizzas</option>
                                    <option value="pastas">Pastas</option>
                                    <option value="burgers">Burgers</option>
                                    <option value="meat">Meat</option>
                                    <option value="desserts">Desserts</option>
                                </select>
                                <br />
                                <label for="textarea">Description of the product</label>
                                <textarea id="textarea" className="form-control mb-4" name="product_description" placeholder="Description" onChange={handleChange}></textarea>

                                <div className="custom-control custom-checkbox mb-4">
                                    <input type="checkbox" className="custom-control-input" checked={formData.is_disable} name="is_disable" onClick={handleClick} id="checkbox" />
                                    <label className="custom-control-label" for="checkbox"> Is it available right now?</label>
                                </div>
                                {
                                    store.error !== null && (
                                        <div className="alert alert-danger" role="alert">
                                            {store.error}
                                        </div>)
                                }
                                <div className="d-grid gap-2">
                                    <button className="btn btn-success" type="submit">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductEdit;