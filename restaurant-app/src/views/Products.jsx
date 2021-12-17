import React from "react";
import Sidebar from "../components/Sidebar";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Products = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getProducts()
    }, [])

    const productGenerator = store.products.map((product, i) => {
        return (
            <tr key={i}>
                <th scope="row"><img className="img-thumbnail" style={{height: "50px", width: "50px"}} src={product.aws_path}/></th>
                <td>{product.product_name}</td>
                <td>{product.product_price}</td>
                <td>{product.category_id}</td>
                <td>{product.is_disable ? "✓" : "X"}</td>
                <td><Link className="btn btn-primary btn-sm" to={"/product-edit/" + i} role="button">Edit</Link></td>
            </tr>)
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
                                <h3>Products</h3>
                                <p className="lead">In this page you can tag products to be available or unavailable, also add or eliminate products. This view is only visible to admin users.</p>
                                <hr />
                                <div className="row">
                                    <div className="col py-4 text-center">
                                        <Link className="mx-auto btn btn-success text-center justify-content-around" to="/add-product" role="button">Add a new product</Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <table className="table table-striped table-hover table-bordered text-align-center">
                                        <thead className="table-secondary">
                                            <tr classNameName="table-secondary">
                                                <th scope="col">Picture</th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Availability</th>
                                                <th scope="col">Edit</th>
                                            </tr>
                                        </thead>
                                        <tbody className="shadow-lg p-3 mb-5 bg-body rounded">
                                            {productGenerator}
                                        </tbody>
                                    </table>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Products;