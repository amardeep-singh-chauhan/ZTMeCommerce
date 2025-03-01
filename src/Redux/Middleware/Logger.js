const LoggerMiddleware = (state) => (next) => (action) => {
    if(!action.type) {
        next(action)
    }

    console.log('type:', action.type)
    console.log('payload:', action.payload)
    console.log('cuurentState:', state.getState())

    next(action)

    console.log('next State:', state.getState())
};

export default LoggerMiddleware;