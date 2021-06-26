import { createStore } from 'redux'
import { combineReducers } from 'redux'
import advantageReducer from '../reducers/advantageReducer'
import faqReducer from '../reducers/faqReducer'
import footerReducer from '../reducers/footerReducer'
import headerReducer from '../reducers/headerReducer'
import testimonialsReducer from '../reducers/testimonialsReducer'

const rootReducer = combineReducers({
  header: headerReducer,
  advantage: advantageReducer,
  testimonials: testimonialsReducer,
  faq: faqReducer,
  footer: footerReducer,
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store