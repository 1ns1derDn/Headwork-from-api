import React from 'react'
import { ConsumerServiceJoke } from '../context/contextServiceJoke'

const withContextServiceJoke = () => (Wrapper) => {
  return (props) => {
    return <ConsumerServiceJoke>
      {
        (serviceJoke) => {
          return <Wrapper {...props} serviceJoke={serviceJoke} />
        }
      }
    </ConsumerServiceJoke>
  }
}

export default withContextServiceJoke