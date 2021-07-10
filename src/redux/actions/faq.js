import { barApi } from "../../api/barcontrolApi"

const faqAction = {
  getFaq: (data) => ({ type: 'GET_FAQ', data })
}

export const getFaq = () => async (dispatch) => {
  try {
    const { data } = await barApi.faq()
    dispatch(faqAction.getFaq(data))
  } catch (error) {
    console.log(`Faq error ${error}`);
  }
}