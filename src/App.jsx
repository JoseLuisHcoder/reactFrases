import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './utils/quotes.json'
import Quotes from './components/Quotes'
import color from './utils/colors'





function App() {
  const getIndexRandom = arr => Math.floor(Math.random()* arr.length)
  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]

  

  const [randomQuotes, setRandomQuotes] = useState(firstQuote)
  const [randomColor, setrandomColor] = useState(firstColor)

  const backgroundObj = {
    backgroundColor: randomColor
  }

  const getRandomAll = () => {
    setRandomQuotes(quotes[getIndexRandom(quotes)])
    setrandomColor(color[getIndexRandom(color)])
  }
  return (
    <div style={backgroundObj} className="App">
     <Quotes getRandomAll={getRandomAll} randomQuotes={randomQuotes} randomColor={randomColor}/>
    </div>
  )
}

export default App
