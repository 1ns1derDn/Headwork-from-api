import React from 'react'
import UserList from '../../UserList'
import './PageUsers.scss'

const PageUsers = () => {
  return (
    <section className="PageUsers">
      <div className="Container">
        <div className="PageUsers-Inner">
          <UserList />
        </div>
      </div>
    </section>
  )
}

export default PageUsers