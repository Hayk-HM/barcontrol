const initialState = []

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SLIDERS':
      return [
        ...action.data.data
      ]
    default:
      return state
  }
}

export default headerReducer