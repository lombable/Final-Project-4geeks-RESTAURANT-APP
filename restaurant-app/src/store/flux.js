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
            token: null,
            first_name: null,
            last_name: null,
            rut: null,
            address: null,
            city: null,
            dob: null,
            product_name: null,
            product_price: null,
            category_id: null,
            product_img: null,
            product_description: null,
            is_active: null,
            is_admin: null,
            is_disable: null,
            tables: [],
            users: [],
            products: [
                {
                    productImg: "../img/bk-agua.png",
                    productName: "Agua (1L)",
                    productPrice: "$ 1.000",
                    productCategory: "Bebidas",
                    isAvailable: true,
                },
                {
                    productImg: "../img/img-american-burger.jpg",
                    productName: "Hamburguesa Americana",
                    productPrice: "$ 4.500",
                    productCategory: "Hamburguesas",
                    isAvailable: true,
                }, {
                    productImg: "../img/pizza-margarita.jpg",
                    productName: "Pizza Margarita",
                    productPrice: "$ 6.000",
                    productCategory: "Pizzas",
                    isAvailable: false,
                },

            ],
            orders: [
                {
                    productImg: "../img/bk-agua.png",
                    productName: "Agua (1L)",
                    productPrice: "$ 1.000",
                },
                {
                    productImg: "../img/img-american-burger.jpg",
                    productName: "Hamburguesa Americana",
                    productPrice: "$ 4.500",
                },
                {
                    productImg: "../img/pizza-margarita.jpg",
                    productName: "Pizza Margarita",
                    productPrice: "$ 6.000",
                }
            ]
        },

        actions: {
            // Use getActions to call a function within a fuction

            addTable: (table) => {
                const store = getStore();
                setStore(store.table.concat(table));
            },

            getUsers: () => {
                const store = getStore();
                fetch(store.path + '/profile/api/v1/users/', {
                    method: 'GET',
                    headers: { "Content-Type": "application/json" },
                })
                    .then(resp => resp.json())
                    .then(data => {

                        setStore({
                            users: data.users
                        })

                    })
            },

            getTables: () => {
                const store = getStore();
                fetch(store.path + '/profile/api/v1/tables/', {
                    method: 'GET',
                    headers: { "Content-Type": "application/json" },
                })
                    .then(resp => resp.json())
                    .then(data => {

                        setStore({
                            tables: data.tables
                        })

                    })
            },

            getProducts: () => {
                const store = getStore();
                fetch(store.path + '/profile/api/v1/products', {
                    method: 'GET',
                    headers: { "Content-Type": "application/json" },
                })
                    .then(resp => resp.json())
                    .then(data => {

                        setStore({
                            products: data.products
                        })

                    })
            },

            login: (formData) => {
                const store = getStore();
                fetch(store.path + '/login', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data
                            })
                        } else {
                            setStore({
                                currentUser: data,
                                isAuthenticated: true,
                                email: null,
                                password: null,
                                error: null
                            })
                        }
                    })
            },

            addProduct: async (formData, history) => {

                try {
                    const store = getStore();
                    if (!formData.product_name || !formData.category_id || !formData.product_price || !formData.product_description) {
                        setStore({
                            error: "Debe completar todos los campos"
                        })
                    } else {
                        await fetch(store.path + '/profile/api/v1/products', {
                            method: 'POST',
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(formData),
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
                                
                            })
                    }
                } catch (error) {
                    console.log(error)
                }

            },

            register_client: async (formData) => {

                try {
                    console.log(formData)
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
