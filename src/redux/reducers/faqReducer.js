const initialState = []

const faqReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_CLOSE':
      return [
        ...state.map(elem => {
          if (elem.id !== action.id) {
            elem.isOpen = false
          }
          if (elem.id === action.id) {
            return {
              ...elem,
              isOpen: !elem.isOpen
            }
          }
          return elem
        })
      ]
    case 'GET_FAQ':
      return [
        ...action.data.data
      ]
    default:
      return state
  }
}

export default faqReducer