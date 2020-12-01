const initialState = [
  {
    userName: 'Лиза Нуркова',
    userGender: 'Женский',
    userCreditCard: '4747-6548-5468-1323',
    withLoyaltyProgram: false,
    userCoupon: '',
    date: new Date()
  },
  {
    userName: 'Вадим Иванов',
    userGender: 'Мужской',
    userCreditCard: '4756-6532-5218-1893',
    withLoyaltyProgram: true,
    userCoupon: '58623645',
    date: new Date()
  },
  {
    userName: 'Люда Петровна',
    userGender: 'Женский',
    userCreditCard: '6578-3456-8763-5156',
    withLoyaltyProgram: true,
    userCoupon: '93849383',
    date: new Date()
  }
]

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER': {
      return [...state, { ...action.payload }]
    }
    default:
      return state
  }
}

export default usersReducer