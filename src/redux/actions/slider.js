import { barApi } from "../../api/barcontrolApi";

const sliderActions = {
  getSliders: (data) => ({ type: 'GET_SLIDERS', data })
}

export const getSlider = () => async (dispatch) => {
  try {
    const { data } = await barApi.slider()
    dispatch(sliderActions.getSliders(data))
  } catch (error) {
    console.log(`Get Slider error ${error}`);
  }
}