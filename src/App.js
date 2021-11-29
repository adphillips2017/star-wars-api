import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';
import SpeciesBrowser from './components/SpeciesBrowser';
import Details from './components/Details';


const speciesApiUrl = 'https://swapi.dev/api/species/';
const searchApiUrl = 'https://swapi.dev/api/people/?search=';

function App() {
  const [species, setSpecies] = useState([]);
  const [nextPage, setNextPage] = useState(speciesApiUrl);
  const [prevPage, setPrevPage] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    const getSpecies = async () => {
      await fetchSpecies(nextPage);
    };

    getSpecies();
  }, []);

  const fetchSpecies = async (url = nextPage) => {
    const response = await fetch(url);
    const data = await response.json();

    const newNextPage = data.next;
    const newPrevPage = data.previous;

    setNextPage(newNextPage);
    setPrevPage(newPrevPage);

    console.log(`fetchNextPage`, data);
    setSpecies(data.results);
  };

  const getPageUrl = (page) => {
    if (page < 1) {
      return speciesApiUrl;
    }

    return `${speciesApiUrl}?page=${page}`;
  };

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" exact element={(
            <SpeciesBrowser species={species} onSelect={setSelectedPerson} />
        )}/>
        
        <Route path="/details" element={(
          <>
            { selectedPerson != null ? (
              <Details person={selectedPerson} />
            ) : (
              <h1 style={{padding: '2rem'}}>No person selected.</h1>
            )}
          </>
        )} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
