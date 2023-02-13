import React from 'react';
import Search from './components/Search';
import contacts from './contacts';
import "./App.css"

function App() {
  return (
    <div className='phone'>
       <Search details={contacts}/>
    </div>
  );
}

export default App;
