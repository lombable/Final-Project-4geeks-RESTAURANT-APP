const Master = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

const MasterRoute = ({element: Element, ...others}) => {
    const {store,actions}  = useContext(Context)

    {store.currentUser === null && <h1>victoria</h1>}
}