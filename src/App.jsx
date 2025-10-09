import { useEffect, useState } from 'react'
import './App.css'


export default function Quote(){ 
  // let URL = "https://api.quotable.io/quotes/random";
  let URL = "https://dummyjson.com/quotes/random";
    const [quote , setQuotes] = useState("");

  useEffect(()=>{
    async function getFirstQuotes() {
      let response = await fetch(URL);
      let jsonRes  =  await response.json();
      console.log(jsonRes);
      setQuotes(jsonRes);
    }
     getFirstQuotes();
  },[])

  const getRandomQuotes = async() =>{
      let response = await fetch(URL);
        let jsonResponse = await response.json();
      setQuotes({author: jsonResponse.author, quote: jsonResponse.quote});
      console.log(jsonResponse);
  }

  return (
    <>
    <h1>Quotes</h1>
    <p className='info'>Get your random quote here!</p>
      <div>
          <div className='quote-wrapper'>
            <p className='quotes'>{quote.quote}</p>
          </div>
            <p className='author'>— {quote.author}</p>
      </div>
    <button  onClick={getRandomQuotes}>Get Quotes</button>
      <br></br>
      <span className='cornerText'>Quotes from DUMMY JSON</span>

    <div className="footer">
      <p>©  All rights reserved for HARSH</p>
    </div>
    </>
  )
}
