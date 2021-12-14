import React from "react";
import { Context } from '../store/appContext';
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";


const Sidebar = () => {

    const history = useHistory();

    const { actions } = useContext(Context);

    return (
        <>
            <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2">
                <Link to="/admin-panel" className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 text-dark">R<span className="d-none d-sm-inline text-dark">estaurant APP</span></span>
                </Link>
                <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link to="/admin-panel" className="nav-link px-sm-0 px-2">
                            <i className="fs-5 bi-house"></i><span className="ms-1 d-none d-sm-inline">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/kitchen-orders" className="nav-link px-sm-0 px-2">
                            <i className="fs-5 bi-speedometer2"></i><span className="ms-1 d-none d-sm-inline">Pending Orders</span> </Link>
                    </li>
                    <li>
                        <Link to="/admin-tables" className="nav-link px-sm-0 px-2">
                            <i className="fs-5 bi-table"></i><span className="ms-1 d-none d-sm-inline">Tables</span></Link>
                    </li>
                    <li>
                        <Link to="/products" className="nav-link px-sm-0 px-2">
                            <i className="fs-5 bi-grid"></i><span className="ms-1 d-none d-sm-inline">Products</span></Link>
                    </li>
                    <li>
                        <Link to="/users" className="nav-link px-sm-0 px-2">
                            <i className="fs-5 bi-people"></i><span className="ms-1 d-none d-sm-inline">Users</span> </Link>
                    </li>
                </ul>
                <div className="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
                    <Link to="#" className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="28" height="28" className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1"> AdminUser</span>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-light text-small shadow" aria-labelledby="dropdownUser1">
                        <li><Link className="nav-link px-sm-0 px-2" onClick={() => actions.logout(history)}> <i className="dropdown-item" >Sign out</i></Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;