import React, {useState, useEffect} from 'react'

const QuoteGenerator = () => {
    
    const [randomQuote, setRandomQuote] = useState('')

    useEffect(() => {
        fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
            setRandomQuote(data.content + '-' + data.author);
        })
        .catch((error) => {
            console.log('Error fetching quotes:', error)
        })
    }, [])

  return (
    <div>
            <blockquote>{randomQuote}</blockquote>
    </div>
  )
}

export default QuoteGenerator