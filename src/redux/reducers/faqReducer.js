const initialState = [
  {
    "id": 7,
    "order": 0,
    "question_en": "What type of products can I track in Bar Control?",
    "answer_en": "Bar Control has several main inventory categories: liquor, wine, sparkling wine, whisky vodka, syrups, rum, brandy, bottled beer, draft beer, goods(this category can be used to track products like cigarettes), etc.",
    "question_ru": "",
    "answer_ru": "",
    "question_hy": "",
    "answer_hy": "",
    "updated_at": "2021-03-01T19:20:35.691Z",
    "created_at": "2021-03-01T19:20:35.691Z",
    "question": "What type of products can I track in Bar Control?",
    "answer": "Bar Control has several main inventory categories: liquor, wine, sparkling wine, whisky vodka, syrups, rum, brandy, bottled beer, draft beer, goods(this category can be used to track products like cigarettes), etc."
  },
  {
    "id": 6,
    "order": 1,
    "question_en": "What is the software about?",
    "answer_en": "Bar Control is inventory management software developed specifically for bars, restaurants, and clubs. It gives you complete inventory tracking capabilities for alcoholic and non-alcoholic beverages. Whether you are a small local cafe or a full-scale restaurant, Bar Control makes your inventory process easy.",
    "question_ru": "",
    "answer_ru": "",
    "question_hy": "",
    "answer_hy": "",
    "updated_at": "2021-03-01T19:16:07.568Z",
    "created_at": "2021-03-01T19:16:07.568Z",
    "question": "What is the software about?",
    "answer": "Bar Control is inventory management software developed specifically for bars, restaurants, and clubs. It gives you complete inventory tracking capabilities for alcoholic and non-alcoholic beverages. Whether you are a small local cafe or a full-scale restaurant, Bar Control makes your inventory process easy."
  },
  {
    "id": 5,
    "order": 2,
    "question_en": "Who is Invtech?",
    "answer_en": "\"Invtech\" LLC was founded in 2020 and launched online in 2021. We are a small team of dedicated people with substantial experience in the hospitality industry.",
    "question_ru": "",
    "answer_ru": "",
    "question_hy": "",
    "answer_hy": "",
    "updated_at": "2021-03-01T19:14:06.636Z",
    "created_at": "2021-03-01T19:14:06.636Z",
    "question": "Who is Invtech?",
    "answer": "\"Invtech\" LLC was founded in 2020 and launched online in 2021. We are a small team of dedicated people with substantial experience in the hospitality industry."
  },
  {
    "id": 4,
    "order": 3,
    "question_en": "What is the efficient percentage?",
    "answer_en": "On average it's about 99%",
    "question_ru": "Каков процент эффективности?",
    "answer_ru": "В среднем это около 99%",
    "question_hy": "Ո՞րն է արդյունավետության տոկոսը:",
    "answer_hy": "Միջինում դա մոտ 99% է",
    "updated_at": "2021-02-19T09:18:04.886Z",
    "created_at": "2021-02-19T09:18:04.886Z",
    "question": "What is the efficient percentage?",
    "answer": "On average it's about 99%"
  },
  {
    "id": 3,
    "order": 4,
    "question_en": "What additional equipment do I need?",
    "answer_en": "You need a wireless scale for managing inventory",
    "question_ru": "Какое дополнительное оборудование мне нужно?",
    "answer_ru": "Вам нужны беспроводные весы для управления запасами",
    "question_hy": "Ինչ լրացուցիչ սարքավորում է ինձ պետք:",
    "answer_hy": "Գույքագրումը կառավարելու համար ձեզ հարկավոր է անլար սանդղակ",
    "updated_at": "2021-02-19T08:47:59.165Z",
    "created_at": "2021-02-19T08:47:59.165Z",
    "question": "What additional equipment do I need?",
    "answer": "You need a wireless scale for managing inventory"
  }
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
    case 'GET_FAQ':
      return [
        ...action.data.data
      ]
    default:
      return state
  }
}

export default faqReducer