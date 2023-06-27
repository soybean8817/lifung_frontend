import React, { useState } from 'react';
import SearchList from './SearchContactList';

function SearchContact({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredContacts = details.filter(
    contact => {
      return (
        contact
        .first_name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        contact
        .last_name
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
        <SearchList filteredContacts={filteredContacts} />
    );
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search your contact</h2>
      </div>
      <div className="pa2">
        <input
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search"
          placeholder = "Enter First/Last Name"
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default SearchContact;