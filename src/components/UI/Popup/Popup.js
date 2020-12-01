import React, { Component } from 'react'
import './Popup.scss'
import ButtonTran from '../ButtonTran'
import BlockTran from '../BlockTran'


class Popup extends Component {

  buttonRef = React.createRef()

  componentDidMount() {
    this.buttonRef.current.focus()
  }

  render() {
    return (
      <div className="Popup" onClick={this.props.activePupop}>
        <BlockTran clazz={"Popup-Content"}>
          <h2 className="Popup-Title">{this.props.title}</h2>
          <ButtonTran
            handleClick={this.props.handleClickPopupButton}
            refLink={this.buttonRef}>
            {"Перейти в список"}
          </ButtonTran>
        </BlockTran>
      </div>
    )
  }
}

export default Popup