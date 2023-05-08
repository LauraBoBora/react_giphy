// all our imports - React, styling, components, etc
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import GiphyDisplay from './components/GiphyDisplay';
import GiphyForm from './components/GiphyForm';
import GiphyHeader from './components/GiphyHeader';


function App() {
  // variable with api key
  const apiKey = "gij38Z8IHZqzbkCcCZOYXsfqy3MLekFJ";

  // state to hold giphy data
  const [giphy, setGiphy] = useState(null);

  // funtion to getGiphys
  const getGiphy = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`
    );
    // parse JSON response into a javascript object
    const data = await response.json();
    // set the giphy state to the giphy
    // random number generator to refresh new giphy
    let rando = Math.floor(Math.random() * 26)
    setGiphy(data.data[rando]);
  };

  // will run on first render but not on subsequent renders
  // useEffect(() => {
  //   getGiphy("SpongeBob");
    // the empty [] is a dependency array and when empty this code runs once when the component mounts
  // }, [])

  // use our components in App's returned JSX
  // we pass the getGiphy function as a prop called giphysearch
  // we pass giphy as a prop to GiphyDisplay
  return (
    <div className="App">
      <GiphyHeader />
      <GiphyForm giphySearch={getGiphy} />
      <GiphyDisplay giphy={giphy} />
    </div>
  );
}

export default App;
