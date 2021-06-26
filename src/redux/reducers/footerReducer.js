const initialState = {
  phone: '213-277-5534',
  email: 'info@barcontrol.com',
  domain: 'barcontrol.com',
  location: 'Corporate Office 400 Northridge Road, Suite 1000 Atlanta, GA 30350',
  information: 'Terms of usage Privacy policy',
  aboutUs: 'BarControl is an efficient inventory software which allows to check all the actual stock of a bar.',
  social: ['facebook', 'instagram', 'twitter']
}

const footerReducer = (state = initialState, action) => {
  switch (action.key) {
    case action.key:
      return state


    default:
      return state
  }
}

export default footerReducer
