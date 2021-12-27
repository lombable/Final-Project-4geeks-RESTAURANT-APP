import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const UserMainView = () => {

    const [shoppingCart, setShoppingCart] = useState([]);

    const onChangeCartHandler = (product) => {

        let newProduct = {
            product_name: product.product_name,
            product_id: product.product_id,
            product_quantity: 1,
            table_id: params.id,
            user_id: 1,
        }

        let addProduct = shoppingCart.concat(newProduct)
        setShoppingCart(addProduct)
    }

    const { store, actions } = useContext(Context);

    const params = useParams();

    useEffect(() => {
        actions.getCategories()
    }, [])

    useEffect(() => {
        actions.getSingleTable(params.id)
    }, [])

    const productsOnCart = shoppingCart.map((item, i) => {
        return (
            <p key={i}><strong>{item.product_name}</strong></p>
        )
    })

    const handleClickConsole = (shoppingCart) => {
        actions.addOrder(shoppingCart)
    }

    const accordionHeaderGenerator = store.categories.map((category, i) => {
        return (<div className="accordion-item">
            <h2 className="accordion-header" id={i}>
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#accordion${i}`}
                    aria-expanded="true"
                    aria-controls={`accordion${i}`}
                >
                    {category.category_name}
                </button>

            </h2>
            <div id={`accordion${i}`} className="accordion-collapse collapse" aria-labelledby={i} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {category.products.map((product, i) => {
                            return (
                                <>
                                    <div className="col">
                                        <div className="card h-100" key={i}>
                                            <img src={product.aws_path} className="card-img-top" width="150px" height="150px" alt="food-img" />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.product_name}</h5>
                                                <small className="card-text">{product.product_description}</small>
                                                <div className="card-footer">
                                                    <small className="text-muted"><button type="button" className="btn btn-success btn-sm" onClick={() => onChangeCartHandler(product)}>Add to cart</button></small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        )
    })

    return (
        <>
            <div className="col-md-12" style={{ backgroundColor: "#d4d6d9" }}>
                <div className="mx-4 col d-flex flex-column h-sm-100">
                    <main className="row overflow-auto pt-4">
                        <h3>Add an order</h3>
                        <p className="lead">Here you can add order to a specific table.</p>
                        <hr />

                        <div className="row">
                            <div className="accordion" id="accordionExample">
                                {accordionHeaderGenerator}
                            </div>
                        </div><br /><br />
                        <div className="row lead">
                            In the shopping cart:
                        </div>
                        <div className="row">
                            <div className="accordion" id="accordionExample2">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                            Shopping cart
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse show" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            {
                                                shoppingCart.length !== 0 ?
                                                    <div className="row">
                                                        {productsOnCart}
                                                    </div>
                                                    :
                                                    <h3>No products added. Add some!</h3>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col py-4 text-center">
                                <Link className="mx-auto btn btn-success text-center justify-content-around" onClick={() => handleClickConsole(shoppingCart)} to={"/user/table-" + params.id + "-orders"} role="button">Add an order</Link>
                            </div><br /><br />
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default UserMainView;