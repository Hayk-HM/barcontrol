const initialState = { language: '_en' }

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return {
        ...state,
        language: action.language
      }
    default:
      return state
  }
}

export default languageReducer