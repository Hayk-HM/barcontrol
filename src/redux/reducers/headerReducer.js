const initialState = [
  {
    "id": 1,
    "text_en": "OCEAN OCEAN OCEAN OCEAN OCEAN  DRIVE",
    "text_ru": "",
    "text_hy": "",
    "image": "/uploads/home_slider/1613561759136__roberto-h-qToVxSYXPYU-unsplash.jpg",
    "order": 0,
    "updated_at": "2021-02-17T11:35:59.788Z",
    "created_at": "2021-02-17T11:35:59.788Z",
    "text": "OCEAN OCEAN OCEAN OCEAN OCEAN  DRIVE"
  },
  {
    "id": 3,
    "text_en": "If You Run a Bar, You Need Bar Control Application ",
    "text_ru": "Если вы запускаете Бар, вам нужно приложение для управления Бар",
    "text_hy": "Եթե դուք ձող եք գործարկում, ձեզ հարկավոր է ձողի կառավարման ծրագիր",
    "image": "/uploads/home_slider/1613723201858__barimage.jpg",
    "order": 1,
    "updated_at": "2021-02-19T08:26:42.424Z",
    "created_at": "2021-02-19T08:26:42.424Z",
    "text": "If You Run a Bar, You Need Bar Control Application "
  }
]

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