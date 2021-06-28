const initialState = [
  { id: '1', question: 'How do I get started?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', isOpen: false },
  { id: '2', question: 'Do I need my own MC authority?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', isOpen: false },
  { id: '3', question: 'What type of equipment do we dispatch?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', isOpen: false },
  { id: '4', question: 'How much does it cost to work with DispatchExperts?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', isOpen: false },
  { id: '5', question: 'Can I decline a load?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', isOpen: false },
  { id: '6', question: 'Are there any commitments to using DispatchExperts services?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', isOpen: false },
  { id: '7', question: 'Where do you find your freight?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', isOpen: false },
  { id: '8', question: 'Does DispatchExperts do the invoicing for my company? And how am I paid?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', isOpen: false },
  { id: '9', question: 'What is a factoring company?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', isOpen: false },
]

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

    default:
      return state
  }
}

export default faqReducer