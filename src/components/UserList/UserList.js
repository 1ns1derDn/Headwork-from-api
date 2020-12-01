import React from 'react'
import { connect } from 'react-redux'

import UserListItem from '../UserListItem'
import './UserList.scss'

const UserList = (props) => {
  const renderUsers = (
    props.users.map((user, index) => {
      const { userName, userGender, userCreditCard, userCoupon, date } = user
      return (
        <UserListItem
          key={index}
          name={userName}
          gender={userGender}
          creditCard={userCreditCard}
          cupon={userCoupon}
          date={date.getFormatDate()}
          clzs={
            {
              nameClazz: "UserList-Name",
              genderClazz: "UserList-Gender",
              cuponClazz: "UserList-Cupon",
              dateClazz: "UserList-Date"
            }
          }
        />
      )
    })
  )

  return (
    <div className="UserList">
      <div className="UserList-Head">
        <h3 className="UserList-Title UserList-Name">Имя</h3>
        <h3 className="UserList-Title UserList-Gender">Пол</h3>
        <h3 className="UserList-Title UserList-Cupon">Купон</h3>
        <h3 className="UserList-Title UserList-Date">Дата</h3>
      </div>

      <div className="UserList-Content">
        {renderUsers}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps)(UserList)