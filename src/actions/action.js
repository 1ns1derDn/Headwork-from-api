export const popupToggle = () => ({
  type: 'POPUP_TOGGLE'
})

export const goToPageOurList = () => ({
  type: 'GO_TO_PAGE_OUR_LIST'
})

export const userClearFrom = () => ({
  type: 'USER_CLEAR_FROM'
})

export const addUser = (newUser) => ({
  type: 'ADD_USER',
  payload: newUser
})

export const handleChange = (e) => ({
  type: 'HANDLE_CHANGE',
  payload: e
})

export const handleFocus = (e) => ({
  type: 'HANDLE_FOCUS',
  payload: e
})

export const handleBlur = (e) => ({
  type: 'HANDLE_BLUR',
  payload: e
})

export const isValidate = (target) => ({
  type: 'IS_VALIDATE',
  payload: target
})

export const handleSubmit = (dispatch) => (user) => (e) => {
  e.preventDefault()
  const { userName, userCreditCard, userCoupon } = user
  if (userName.isValidate && userCreditCard.isValidate && userCoupon.isValidate) {

    dispatch(addUser({
      userName: user.userName.value,
      userGender: user.userGender.value,
      userCreditCard: user.userCreditCard.value,
      withLoyaltyProgram: user.withLoyaltyProgram.value,
      userCoupon: user.userCoupon.value,
      date: new Date()
    }))

    dispatch(userClearFrom())
    dispatch(popupToggle())
    e.target.reset()
  }
}

export const fetchJokeRequest = () => ({
  type: 'FETCH_JOKE_REQUEST'
})

export const fetchJokeSuccess = (payload) => ({
  type: 'FETCH_JOKE_SUCCESS',
  payload
})

export const fetchJokeFailure = (payload) => ({
  type: 'FETCH_JOKE_FAILURE',
  payload
})

export const alertJokeClose = () => ({
  type: 'ALERT_JOKE_CLOSE'
})

export const clearAlerSetTimeout = (payload) => ({
  type: 'CLEAR_ALERT_SET_TIMEOUT',
  payload
})

export const fetchJoke = (serviceJoke) => () => (dispatch) => {
  dispatch(fetchJokeRequest())
  dispatch(alertJokeClose())
  serviceJoke.getJoke()
    .then(joke => {
      dispatch(fetchJokeSuccess(joke.value))
      const clearSetTimeoutId = setTimeout(() => {
        dispatch(alertJokeClose())
      }, 5000)
      dispatch(clearAlerSetTimeout(clearSetTimeoutId))
    })
    .catch(error => dispatch(fetchJokeFailure(error)))
}




