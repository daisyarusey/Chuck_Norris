
import React, { useEffect, useState } from 'react';
import './App.css';
import Chuck from './download.jpg';
import axios from 'axios';
import List from './components/List';
import withListLoading from './components/withListLoading';

function App() {

  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    catgs: null,
  });

useEffect(() => {
  setAppState({ loading: true });
  const apiUrl = 'https://api.chucknorris.io/jokes/categories';
  axios.get(apiUrl).then((catgs) => {
    const allCatgs = catgs.data;
    setAppState({ loading: false, catgs: allCatgs });
  });
}, [setAppState]);


  return (
    <div className='App'>
      <div className='container'>
      <h1 className="title">Chuck Norris Jokes</h1>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 card-group">
          <div className="card ">
            <ListLoading isLoading={appState.loading} catgs={appState.catgs} />
          
          </div>
          <div className="image card">
            <img src ={Chuck} alt="Chuck Noris" />
          </div>
        </div>
        
       </div>
       
      </div>
      
    </div>
  );
}
export default App;
