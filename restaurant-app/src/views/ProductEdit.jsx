import React from "react";
import Sidebar from "../components/Sidebar";
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, useHistory } from "react-router-dom";

const ProductEdit = () => {

    const { actions, store } = useContext(Context);

    const params = useParams();

    const history = useHistory();

    const [formData, setFormData] = useState({
        product_name: store.products[params.index].product_name ? store.products[params.index].product_name : "",
        product_id: params.index,
        product_price: store.products[params.index].product_price ? store.products[params.index].product_price : "",
        category_id: store.products[params.index].category_id ? store.products[params.index].category_id : "",
        product_description: store.products[params.index].product_description ? store.products[params.index].product_description : "",
        is_disable: store.products[params.index].is_disable ? store.products[params.index].is_disable : "",
    });

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
        if (params.id !== undefined){
        actions.editProduct(formData, params.id, history)
    }
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
                                <input type="text" id="productName" name="product_name" className="form-control mb-4" value={formData.product_name} onChange={handleChange}>{params.product_name}</input>

                                <label for="textInput">Price</label>
                                <input type="text" id="productPrice" name="product_price" className="form-control mb-4" value={formData.product_price} placeholder="$ 6.500 clp" onChange={handleChange}/>

                                <label for="productCategory">Category of the new product:</label><br /><br />
                                <select className="browser-default custom-select mb-4" name="category_id" id="productCategory" value={formData.category_id} onChange={handleChange}>
                                    <option value="" disabled="">Category</option>
                                    <option value="1">Drinks</option>
                                    <option value="2">Pizzas</option>
                                    <option value="3">Pastas</option>
                                    <option value="4">Burgers</option>
                                    <option value="5">Meat</option>
                                    <option value="6">Desserts</option>
                                </select>
                                <br />
                                <label for="textarea">Description of the product</label>
                                <textarea id="textarea" className="form-control mb-4" name="product_description" placeholder="Description" value={formData.product_description} onChange={handleChange}></textarea>

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
                                </div> <br/>
                                <div className="d-grid gap-2">
                                <button className="btn btn-danger" type="submit" onClick={() => actions.deleteProduct(history, params.index)}>Erase product</button>
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