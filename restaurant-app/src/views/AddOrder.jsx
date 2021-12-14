import React from "react";
import Sidebar from "../components/Sidebar";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const AddOrder = () => {

    const [shoppingCart, setShoppingCart] = useState([]);

    const onChangeCartHandler = (e) => {

        
        let newProduct =  {
            product_name: [e.target.name],
            product_id: [e.target.id],
            product_quantity: 1,
            table_id: 2             
        }

        let addProduct = shoppingCart.concat(newProduct)
        setShoppingCart(addProduct)
    }

    console.log(shoppingCart, "hi")

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCategories()
    }, [])

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
                                                    <small className="text-muted"><button type="button" className="btn btn-success btn-sm" onClick={onChangeCartHandler}>Add to cart</button></small>
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

            <div className="container-fluid overflow-hidden">
                <div className="row vh-100 overflow-auto">
                    <div className="col-4 col-sm-3 col-xl-2 px-sm-2 px-0 bg-light d-flex sticky-top">
                        <Sidebar />
                    </div>
                    <div className="col-md-8">
                        <div className="mx-4 col d-flex flex-column h-sm-100">
                            <main className="row overflow-auto pt-4">
                                <h3>Add an order</h3>
                                <p className="lead">Here you can add order to a specific table.</p>
                                <hr />

                                <div className="row">
                                    <div className="accordion" id="accordionExample">
                                        {accordionHeaderGenerator}
                                    </div>
                                </div>
                                <div className="row lead">
                                    <br />In the shopping cart:
                                </div>
                                <br /><br /><br />
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
                                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><br />
                                <div className="row">
                                    <div className="col pt-4 text-center">
                                        <Link className="mx-auto btn btn-success text-center justify-content-around" to="/add-order/table-id" role="button">Add an order</Link>
                                    </div><br /><br />
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default AddOrder;