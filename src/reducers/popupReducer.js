const initialState = false

const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POPUP_TOGGLE': {
      return !state
    }

    default:
      return state
  }
}

export default popupReducer