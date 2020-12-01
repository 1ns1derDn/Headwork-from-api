import React from 'react'
import { connect } from 'react-redux'
import {
  addUser,
  handleChange,
  handleFocus,
  handleBlur,
  isValidate,
  handleSubmit,
} from '../../actions/action'


import InputWithMask from '../UI/InputWithMask'
import BlockTran from '../UI/BlockTran'
import ButtonTran from '../UI/ButtonTran/ButtonTran'
import CheckboxTran from '../UI/CheckboxTran'
import InputTran from '../UI/InputTran/InputTran'
import RadioTran from '../UI/RadioTran'
import RadioQuestion from '../UI/RadioQuestion/RadioQuestion'
import './FormTran.scss'


const FormTran = (props) => {

  const {
    user: { userName,
      userCreditCard,
      withLoyaltyProgram,
      userCoupon } } = props

  return (
    <form onSubmit={props.handleSubmit(props.user)} className="Form">
      <BlockTran clazz="FormTran">
        <InputTran
          title="Имя и фамилия"
          value={userName.value}
          handleBlur={props.handleBlur}
          handleFocus={props.handleFocus}
          handleChenge={props.handleChange}
          placeholder="Введите имя и фамилию"
          id="UserName"
          type="text"
          clazz='FormTran-Inp'
          name="userName"
          required={true}
          validate={userName.isValidate}
          errorMessage={userName.errorMessage}
          touched={userName.touched}
        />

        <RadioQuestion
          clazz="FormTran-RadioQuestion"
          title="Выберите пол">
          <RadioTran
            value="Мужской"
            name="userGender"
            textHtml="Мужской"
            id="male"
            clazz="FormTran-Radio"
            handleChange={props.handleChange}
            required={true}
          />
          <RadioTran
            value="Женский"
            name="userGender"
            textHtml="Женский"
            id="female"
            handleChange={props.handleChange}
            required={true}
          />
        </RadioQuestion>

        <InputWithMask
          title="Номер карты"
          value={userCreditCard.value}
          name="userCreditCard"
          handleBlur={props.handleBlur}
          handleFocus={props.handleFocus}
          handleChange={props.handleChange}
          placeholder="Введите номер Вашей карты"
          id="maskCreditCard"
          clazz='FormTran-Inp'
          type="text"
          required={true}
          mask="9999-9999-9999-9999"
          validate={userCreditCard.isValidate}
          errorMessage={userCreditCard.errorMessage}
          touched={userCreditCard.touched}
        />

        <CheckboxTran
          title="У вас есть купон?"
          value={withLoyaltyProgram.value}
          name="withLoyaltyProgram"
          action={props.handleChange}
          id="Cupon"
          clazz='FormTran-Chec'
          checked={withLoyaltyProgram.value}
        />

        {
          withLoyaltyProgram.value ? <InputWithMask
            title="Введите пожалуйста номер купона"
            value={userCoupon.value}
            name="userCoupon"
            handleBlur={props.handleBlur}
            handleFocus={props.handleFocus}
            handleChange={props.handleChange}
            placeholder="Номер купона"
            id="loyaltyProgram"
            clazz='FormTran-Inp'
            type="text"
            required={true}
            mask="99999999"
            validate={userCoupon.isValidate}
            errorMessage={userCoupon.errorMessage}
            touched={userCoupon.touched}
          /> : null
        }
        <ButtonTran>
          {"Готово"}
        </ButtonTran>
      </BlockTran>
    </form>
  )
}

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user)),
  handleChange: (e) => dispatch(handleChange(e)),
  handleFocus: (e) => dispatch(handleFocus(e)),
  handleSubmit: handleSubmit(dispatch),
  handleBlur: (e) => {
    dispatch(isValidate(e.target))
    dispatch(handleBlur(e))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(FormTran) 