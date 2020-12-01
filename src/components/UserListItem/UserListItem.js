import React from 'react'
import BlockTran from '../UI/BlockTran'
import './UserListItem.scss'

const UserListItem = (props) => {
  const { name, gender, cupon, date, clzs } = props
  const {
    nameClazz,
    genderClazz,
    cuponClazz,
    dateClazz
  } = clzs
  return (
    <BlockTran clazz="UserListItem">
      <span className={nameClazz}>{name}</span>
      <span className={genderClazz}>{gender}</span>
      <span className={cuponClazz}>{cupon ? cupon : 'Не используется'}</span>
      <span className={dateClazz}>{date}</span>
    </BlockTran>
  )
}

export default UserListItem