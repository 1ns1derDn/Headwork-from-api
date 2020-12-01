const initialState = {
  userName: {
    value: "",
    isValidate: true,
    errorMessage: '',
    touched: false
  },
  userGender: {
    value: ''
  },
  userCreditCard: {
    value: "",
    isValidate: true,
    errorMessage: '',
    touched: false
  },
  withLoyaltyProgram: {
    value: false
  },
  userCoupon: {
    value: "",
    isValidate: true,
    errorMessage: '',
    touched: false
  },
  date: new Date()
}

const userFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_CHANGE': {
      const target = action.payload.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;

      return {
        ...state,
        [name]: { ...state[name], value: value }
      }
    }

    case 'HANDLE_FOCUS': {
      const target = action.payload.target;
      return {
        ...state,
        [target.name]: { ...state[target.name], isValidate: true }
      }
    }

    case 'HANDLE_BLUR': {
      const target = action.payload.target
      return {
        ...state,
        [target.name]: { ...state[target.name], touched: true }
      }
    }

    case 'IS_VALIDATE': {

      const { payload: target } = action
      const { name, value } = target
      const regExpUserName = /^[А-ЯЁ][а-яё]*\s[А-ЯЁ][а-яё]*$/
      const regExpUserCreditCard = /\d{4}-\d{4}-\d{4}-\d{4}/
      const regExpUserCoupon = /^[0-9]{8}$/

      if (name === 'userName') {
        if (!regExpUserName.test(value) && value !== '') {
          return {
            ...state,
            [target.name]: {
              ...state[target.name],
              isValidate: false,
              errorMessage: 'Введите имя и фамилия заглавными буквами'
            }
          }
        } else {
          return {
            ...state,
            [target.name]: {
              ...state[target.name],
              isValidate: true,
              errorMessage: ''
            }
          }
        }
      }

      if (name === "userCreditCard") {
        if (!regExpUserCreditCard.test(value) && value !== '') {
          return {
            ...state,
            [target.name]: {
              ...state[target.name],
              isValidate: false,
              errorMessage: "Введите номер карты"
            }
          }
        } else {
          return {
            ...state,
            [target.name]: {
              ...state[target.name],
              isValidate: true,
              errorMessage: ""
            }
          }
        }
      }

      if (name === "userCoupon") {
        if (!regExpUserCoupon.test(value) && value !== '') {
          return {
            ...state,
            [target.name]: {
              ...state[target.name],
              isValidate: false,
              errorMessage: "Введите номер купона"
            }
          }
        } else {
          return {
            ...state,
            [target.name]: {
              ...state[target.name],
              isValidate: true,
              errorMessage: ""
            }
          }
        }
      }
      break
    }

    case 'USER_CLEAR_FROM': {
      return initialState
    }

    default:
      return state
  }
}

export default userFormReducer