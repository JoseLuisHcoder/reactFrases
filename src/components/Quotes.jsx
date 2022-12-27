import React from 'react'
import '../../src/App.css'

const Quotes = ({randomQuotes, randomColor, getRandomAll}) => {
    const backgroundObj = {
        color:randomColor
    }
    const buttonBack = {
        backgroundColor: randomColor
    }
  return (
    <article style={backgroundObj} className='cardquotes'>
        <p >{randomQuotes.quote}</p>
        <h1>{randomQuotes.author}</h1>
        <button onClick={getRandomAll} className='btn' style={buttonBack}>&#62;</button>
    </article>
  )
}

export default Quotes