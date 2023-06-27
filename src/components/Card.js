import React from 'react';
import {useNavigate } from "react-router-dom";

function Card({contact}) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/view/"+contact.id)
  };

  return(
    <div onClick={handleClick} className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img className="br-100 h3 w3 dib" alt={contact.first_name + contact.last_name} src={contact.img} />
      <div>
        <h2>{contact.first_name + contact.last_name}</h2>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
        <p>{contact.address}</p>
      </div>
    </div>
  );
}

export default Card;