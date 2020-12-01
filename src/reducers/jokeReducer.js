const initialState = {
  value: '',
  isLoading: true,
  error: null,
  alert: false,
  clearAlerSetTimeout: null 
}

const jokeReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'FETCH_JOKE_REQUEST': {
      return {
        ...state,
        isLoading: true
      }
    }

    case 'FETCH_JOKE_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        value: action.payload,
        alert: true
      }
    }

    case 'FETCH_JOKE_FAILURE': {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }

    case 'CLEAR_ALERT_SET_TIMEOUT': {
      return {
        ...state,
        clearAlerSetTimeout: action.payload
      }
    }

    case 'ALERT_JOKE_CLOSE': {
      return {
        ...state,
        alert: false
      }
    }

    default:
      return state
  }
}

export default jokeReducer