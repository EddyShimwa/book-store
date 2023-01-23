import createStore from 'redux'
import { Provider } from 'react-redux'


const configureStore = () => {
    const store = createStore(reducer, initialState)
    return store
}

export { configureStore, Provider }