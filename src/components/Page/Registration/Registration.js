import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { fetchJoke } from '../../../actions/action'
import withContextServiceJoke from '../../hoc/withContextServiceJoke'
import { popupToggle, goToPageOurList } from '../../../actions/action'
import Video from '../../UI/video'
import FormTran from '../../FormTran'
import Welcome from '../../Welcome'
import Popup from '../../UI/Popup/Popup'
import JokeGeneratorContainer from '../../jokeGenerator/JokeGenerator'
import AlertTran from '../../UI/AlertTran/AlertTran'
import './Registration.scss'

const Registration = (props) => {
  return (
    <React.Fragment>
      <Video>
        <section className="Intro">
          <div className="Container">
            <div className="Intro-Inner">
              <Welcome />
              <div className="Intro-Box">
                <FormTran activePupop={props.popupToggle} />
                <JokeGeneratorContainer joke={props.joke} />
              </div>
            </div>
          </div>
        </section>
      </Video>
      {
        props.popupActive ? <Popup
          title="Регистрация прошла успешно"
          activePupop={props.popupToggle}
          handleClickPopupButton={props.goToPageOurList} /> : null
      }
      {
        props.joke.alert ?
          <AlertTran alert="Шутка про Чака Норриса загрузилась. Уведомление исчезнет через 5 секунд" />
          : null
      }
    </React.Fragment>
  )
}

class RegistrationContainer extends Component {

  componentDidMount() {
    this.props.fetchJoke()
  }

  componentWillUnmount() {
    clearTimeout(this.props.joke.clearAlerSetTimeout)
  }

  render() {
    if (this.props.goToOurList) {
      return <Redirect to="/user-list" />
    }

    return <Registration {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  goToOurList: state.goToPageOurList,
  popupActive: state.popupActive,
  joke: state.joke
})

const mapDispatchToProps = (dispatch, { serviceJoke }) => ({
  popupToggle: () => dispatch(popupToggle()),
  goToPageOurList: () => {
    dispatch(goToPageOurList())
    setTimeout(() => { dispatch(goToPageOurList()) }, 0)
  },
  fetchJoke: () => dispatch(fetchJoke(serviceJoke)())
})

export default compose(
  withContextServiceJoke(),
  connect(mapStateToProps, mapDispatchToProps)
)(RegistrationContainer)