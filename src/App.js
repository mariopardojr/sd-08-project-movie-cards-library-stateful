import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText="Texto mui legal"
        onSearchTextChange="another"
        bookmarkedOnly="mrkonly"
        onBookmarkedChange="obchange"
      />
      <AddMovie />
    </div>
  );
}

export default App;
