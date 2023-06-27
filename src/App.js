import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { Routes, Route, withRouter, RouteComponentProps, Link } from 'react-router-dom';
import SearchContact from './components/SearchContact';
import ContactDetails from './components/ContactDetails';
import initialContacts from './server/db';
function App() {
  return (
    <div className="tc bg-white ma0 pa4 min-vh-100">
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
      <Routes>
        <Route path={'/'}  element={<SearchContact details={initialContacts}/>} />
        <Route path={'/view/:id'}  element={<ContactDetails/>} />
      </Routes>
    </div>

  );
}

export default App;

