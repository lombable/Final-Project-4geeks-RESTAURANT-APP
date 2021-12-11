import React from "react";
import Sidebar from "../components/Sidebar";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const AddOrder = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCategories()
    }, [])

    const categoryGenerator = store.categories.map((category, i) => {
        return (
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" key={i} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {category.category_name}
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>)
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
                                        {categoryGenerator}
                                    </div>
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