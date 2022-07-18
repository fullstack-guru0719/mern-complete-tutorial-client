import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';



function App() {
  return (

    <Router>
    
        <Route exact path='/' component={ShowBookList} />
        <Route path='/create-book' component={CreateBook} />
        <Route path='/edit-book/:id' component={UpdateBookInfo} />
        <Route path='/show-book/:id' component={ShowBookDetails} /> 

    </Router>
  );
}

export default App;
