import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import advantageReducer from '../reducers/advantageReducer'
import faqReducer from '../reducers/faqReducer'
import footerReducer from '../reducers/footerReducer'
import headerReducer from '../reducers/headerReducer'
import languageReducer from "../reducers/languageReducer";
import testimonialsReducer from '../reducers/testimonialsReducer'

const rootReducer = combineReducers({
  header: headerReducer,
  advantage: advantageReducer,
  testimonials: testimonialsReducer,
  faq: faqReducer,
  footer: footerReducer,
  language: languageReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store