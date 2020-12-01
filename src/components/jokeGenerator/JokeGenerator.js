import React from 'react'
import Spinner from '../UI/Spinner/Spinner'

import './JokeGenerator.scss'

const JokeGeneratorContainer = ({ joke }) => {

  if (joke.isLoading) {
    return (
      <div className="Joke">
        <Spinner />
      </div>
    )
  }

  return (
    <JokeGenerator value={joke.value} />
  )
}

const JokeGenerator = ({ value }) => {
  return (
    <div className="Joke">
      <div className="Joke-Text">
        <p>
          {value}
        </p>
      </div>
    </div>
  )
}

export default JokeGeneratorContainer