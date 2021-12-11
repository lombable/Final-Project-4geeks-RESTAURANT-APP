import React from "react";

const ClientLogin = () => {
    return (<section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                        <div class="card-body p-5 text-center">

                            <div class="mb-md-5 mt-md-4 pb-5">

                                <h2 class="fw-bold mb-4 text-uppercase">Login</h2>
                                <p class="text-white-50 mb-5">Please enter your table number or scan de QR code.</p>

                                <div class="form-outline form-white mb-4">
                                    <input type="text" class="form-control form-control-lg" />
                                    <label class="form-label">Table number</label>
                                </div>


                                <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Want your bill in your email? Sign in with Google instead</a></p>

                                <a href="/user/table-id" class="btn btn-outline-light btn-lg px-5" type="submit">Go to your table</a>

                                <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default ClientLogin;