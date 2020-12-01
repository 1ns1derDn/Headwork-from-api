const initialState = false


const goToReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GO_TO_PAGE_OUR_LIST': {
      return !state
    }

    default:
      return state
  }
}

export default goToReducer