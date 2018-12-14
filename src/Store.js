import {createStore} from 'redux'
import reducer from './ducks/reducer'

/**we make the store aware by importing import {provider} from 'react-redux' in INDEX.JS */
export default createStore(reducer)

