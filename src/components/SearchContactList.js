import React from 'react';
import Card from './Card';


function SearchList({ filteredContacts }) {


  const filtered = filteredContacts.map(contact =>  <Card key={contact.id} contact={contact} />);
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;