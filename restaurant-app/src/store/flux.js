const getState = ({ getStore, getActions, setStore }) => {

    return {
        store: {
            path: 'https://desolate-ridge-14789.herokuapp.com',
            currentUser: null,
            error: null,
            email: null,
            password: null,
            confirmedPassword: null,
            isAuthenticated: false,
            first_name: null,
            last_name: null,
            rut: null,
            address: null,
            city: null,
            dob: null,
            product_name: null,
            product_price: null,
            categories: [],
            product_img: null,
            product_description: null,
            is_active: null,
            is_admin: null,
            is_disable: null,
            bills_id: null,
            product_id: null,
            tables: [],
            singleTable: null,
            users: [],
            products: [],
            accessToken: null,
            orders: []
        },

        actions: {
            getUsers: () => {
                const store = getStore();
                fetch(store.path + '/profile/api/v1/users/', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer" + store.accessToken
                    },
                })
                    .then(resp => resp.json())
                    .then(data => {

                        setStore({
                            users: data.users
                        })

                    })
            },

            isAuthenticated: () => {
                if (sessionStorage.getItem('currentUser')) {
                    setStore({
                        currentUser: JSON.parse(sessionStorage.getItem('currentUser')),
                        isAuthenticated: sessionStorage.getItem('isAuthenticated')
                    })
                }
            },

            logout: (history) => {
                setStore({
                    isAuthenticated: false,
                });
                sessionStorage.removeItem('isAuthenticated');
                sessionStorage.removeItem('accessToken');
                sessionStorage.removeItem('first_name');
                history.push('/')
            },

            getTables: () => {
                const store = getStore();
                fetch(store.path + '/profile/api/v1/tables/', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer" + store.accessToken
                    },
                })
                    .then(resp => resp.json())
                    .then(data => {

                        setStore({
                            tables: data.tables
                        })

                    })
            },

            getSingleTable: (id) => {
                const store = getStore();
                fetch(store.path + '/profile/api/v1/tables/' + id)
                    .then(resp => resp.json())
                    .then(data => {

                        setStore({
                            singleTable: data
                        })

                    })
            },

            getCategories: () => {
                const store = getStore();
                fetch(store.path + '/profile/api/v1/categories', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer" + store.accessToken
                    },
                })
                    .then(resp => resp.json())
                    .then(data => {

                        setStore({
                            categories: data.category
                        })

                    })
            },

            getOrders: () => {
                const store = getStore();
                fetch(store.path + '/profile/api/v1/orders', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer" + store.accessToken
                    },
                })
                    .then(resp => resp.json())
                    .then(data => {

                        setStore({
                            orders: data.orders
                        })

                    })
            },

            getProducts: () => {
                const store = getStore();
                fetch(store.path + '/profile/api/v1/products', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer" + store.accessToken
                    },
                })
                    .then(resp => resp.json())
                    .then(data => {

                        setStore({
                            products: data.products
                        })

                    })
            },

            addTable: (formData, history) => {
                try {
                    const store = getStore();
                    if (!formData.bills_id) {
                        setStore({
                            error: "Debe ingresar un número de mesa"
                        })
                    } else {
                        fetch(store.path + '/profile/api/v1/tables', {
                            method: 'POST',
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer" + store.accessToken
                            },
                            body: JSON.stringify(formData),
                        })
                            .then(resp => resp.json())
                            .then(data => {
                                setStore({
                                    bills_id: null,
                                    error: null,
                                })
                                history.push("/admin-panel");
                            })
                        
                    }
                } catch (error) {
                    console.log(error)
                }

            },

            addOrder: async (shoppingCart, id) => {
                console.log(shoppingCart)
                try {
                    const store = getStore();
                   await fetch(store.path + '/profile/api/v1/orders', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer" + store.accessToken
                        },
                        body: JSON.stringify(shoppingCart, id),
                    })
                        .then(resp => resp.json())
                }
                catch (error) {
                    console.log(error)
                }

            },

                        addOrder: async (shoppingCart, id) => {
                console.log(shoppingCart)
                try {
                    const store = getStore();
                   await fetch(store.path + '/profile/api/v1/orders', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer" + store.accessToken
                        },
                        body: JSON.stringify(shoppingCart, id),
                    })
                        .then(resp => resp.json())
                }
                catch (error) {
                    console.log(error)
                }

            },

            login: (formData, history) => {
                try {
                    const store = getStore();
                    fetch(store.path + '/login', {
                        method: 'POST',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(formData),
                    })
                        .then(resp => resp.json())
                        .then(data => {
                            if (data.accessToken) {
                                setStore({
                                    accessToken: data.accessToken,
                                    currentUser: data,
                                    isAuthenticated: true,
                                    email: null,
                                    password: null,
                                    error: null
                                })

                                sessionStorage.setItem('isAuthenticated', true)
                                sessionStorage.setItem('first_name', store.currentUser.first_name)
                                sessionStorage.setItem('accessToken', store.accessToken)
                                history.push("/admin-panel");
                            } else {
                                setStore({
                                    accessToken: null,
                                    isAuthenticated: false,
                                    email: null,
                                    password: null,
                                    error: data.msg
                                })
                                sessionStorage.setItem('isAuthenticated', false)
                                history.push("/login");
                            }
                        }).catch(e => {
                            console.log(e)
                        })
                } catch (error) {
                    console.log(error)
                    setStore({
                        error: error,
                        email: null,
                        password: null,
                        isAuthenticated: false
                    })
                }
            },

            addProduct: async (formData, history) => {
                let fdata = new FormData()
                try {
                    const store = getStore();
                    if (!formData.product_name || !formData.category_id || !formData.product_price || !formData.product_description) {
                        setStore({
                            error: "Debe completar todos los campos"
                        })
                    } else {
                        console.log(fdata)
                        fdata.append("product_name", formData.product_name)
                        fdata.append("category_id", formData.category_id)
                        fdata.append("product_description", formData.product_description)
                        fdata.append("is_disable", formData.is_disable)
                        fdata.append("file", formData.uploaded_img)

                        console.log(fdata)
                        await fetch(store.path + '/profile/api/v1/products', {
                            method: 'POST',
                            headers: {
                                "accept": "*/*",
                                "Authorization": "Bearer " + sessionStorage.getItem("accessToken")
                            },
                            body: fdata, 

                        })
                            .then(resp => resp.json())
                            .then(data => {
                                setStore({
                                    product_name: null,
                                    category_id: null,
                                    product_price: null,
                                    product_description: null,
                                    is_disable: null,
                                })
                                history.push("/products");
                            })
                        
                        
                    }
                } catch (error) {
                    console.log(error)
                }

            },

            editProduct: async (formData, id, history) => {

                try {
                    const store = getStore();
                    if (!formData.product_name || !formData.category_id || !formData.product_price || !formData.product_description) {
                        setStore({
                            error: "Debe completar todos los campos"
                        })
                    } else {
                        await fetch(store.path + '/profile/api/v1/products/' + id, {
                            method: 'PUT',
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer" + store.accessToken
                            },
                            body: JSON.stringify(formData),
                        })
                            .then(resp => resp.json())
                            .then(data => {
                                setStore({
                                    error: null,
                                    product_name: null,
                                    category_id: null,
                                    product_price: null,
                                    product_description: null,
                                    is_disable: null,
                                })
                                history.push("/products");
                            })
                        
                    }
                } catch (error) {
                    console.log(error)
                }

            },

            editUser: async (formData, history, id) => {

                try {
                    const store = getStore();
                    if (!formData.first_name || !formData.last_name || !formData.email || !formData.rut || !formData.address || !formData.dob) {
                        setStore({
                            error: "Debe completar todos los campos"
                        })
                    } else if (formData.password !== formData.confirmedPassword) {
                        setStore({
                            error: "Contraseñas no son iguales"
                        })
                    }
                    else {
                        await fetch(store.path + '/profile/api/v1/users/' + id, {
                            method: 'PUT',
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(formData),
                        })
                            .then(resp => resp.json())
                            .then(setStore({
                                error: null,
                            }),
                            history.push("/users")
                            )
                       
                    }
                } catch (error) {
                    console.log(error)
                }

            },

            deleteUser: async (history, id) => {

                try {
                    const store = getStore();
                        await fetch(store.path + '/profile/api/v1/users/' + id, {
                            method: 'DELETE',
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(history, id),
                        })
                            .then(resp => resp.json())
                            .then(setStore({
                                error: null,
                            }),
                            history.push("/users")
                            )
                       
                    }
                  catch (error) {
                    console.log(error)
                }

            },

            deleteTable: async (history, table_id) => {

                try {
                    const store = getStore();
                        await fetch(store.path + '/profile/api/v1/tables/' + table_id, {
                            method: 'DELETE',
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(history, table_id),
                        })
                            .then(resp => resp.json())
                            .then(setStore({
                                error: null,
                            }),
                            history.push("/admin-panel/")
                            )
                            history.push("/admin-panel/")
                       
                    }
                  catch (error) {
                    console.log(error)
                }

            },

            deleteProduct: async (history, index) => {
                try {
                    const store = getStore();
                        await fetch(store.path + '/profile/api/v1/products/' + index, {
                            method: 'DELETE',
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(history, index),
                        })
                            .then(resp => resp.json())
                            .then(setStore({
                                error: null,
                            }),
                            history.push("/products/")
                            )
                            history.push("/products/")
                       
                    }
                  catch (error) {
                    console.log(error)
                }

            },

            register_client: async (formData, history) => {

                try {
                    const store = getStore();
                    if (!formData.first_name || !formData.last_name || !formData.email || !formData.rut || !formData.address || !formData.dob || !formData.city) {
                        setStore({
                            error: "Debe completar todos los campos"
                        })
                    } else if (formData.password !== formData.confirmedPassword) {
                        setStore({
                            error: "Contraseñas no son iguales"
                        })
                    }
                    else {
                        await fetch(store.path + '/profile/api/v1/users/', {
                            method: 'POST',
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(formData),
                        })
                            .then(resp => resp.json())
                            .then(data => {
                                setStore({
                                    currentUser: data,
                                    isAuthenticated: true,
                                    email: null,
                                    password: null,
                                    dob: null,
                                    error: null,
                                    first_name: null,
                                    last_name: null,
                                    address: null,

                                })
                                history.push("/login");
                            })
                    }
                } catch (error) {
                    console.log(error)
                }

            },

            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },
        }
    };
};

export default getState;
