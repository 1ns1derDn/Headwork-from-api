import React from 'react'
import BlockTran from '../BlockTran'
import './AlertTran.scss'
const AlertTran = ({ alert }) => {
  return (


    <BlockTran clazz="AlertTran">
        <div className="AlertTran-Text">
          <p>
            {alert}
          </p>
        </div>
    </BlockTran>
  )
}

export default AlertTran