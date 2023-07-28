import React, {useState, useEffect} from 'react'

const QuoteGenerator = () => {
    
    const [randomQuote, setRandomQuote] = useState('')

    useEffect(() => {
        // Check if there's a stored quote in localStorage and its timestamp
        const storeQuote = localStorage.getItem('randomQuote');
        const storeTimestamp = localStorage.getItem('quoteTimestamp');

        if (storeQuote && storeTimestamp) {
            const timeElapsed = Date.now() - parseInt(storeTimestamp, 10);
            // If the stored quote is less than 24 hours old, use it
            if (timeElapsed < 24 * 60 * 60 * 1000) {
                setRandomQuote(storeQuote);
                return;
            }
        }

        fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
            const newQuote = data.content + '-' + data.author;
            // Save the new quote and timestamp in localStorage
            localStorage.setItem('randomQuote', newQuote);
            localStorage.setItem('quoteTimestamp', Date.now().toString());
            setRandomQuote(newQuote);
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