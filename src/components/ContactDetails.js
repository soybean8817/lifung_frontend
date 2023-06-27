import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import initialContacts from '../server/db';


function ContactDetails() {
  const params = useParams();
  const [contact, setContact] = useState({});
  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = () => {
    initialContacts.filter(
              contactItem => {
                if (contactItem.id == params.id) {
                   setContact(contactItem);
                   return;
                }
              }
    )
  };

  return (
        <div className="ContactDetails">
                {contact &&
                    <div>
                        <div>
                            <div className={"col-md-12 form-wrapper"}>
                                <h2> Contact Details </h2>
                                <form id={"view-post-form"} noValidate={true}>
                                    <div className="mt3">
                                        <img className="br-100 h5 w5 dib" alt={contact.first_name + contact.last_name} src={contact.img} />
                                    </div>
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f6" htmlFor="first_name"> First Name </label>
                                        <input type="text" id="first_name" defaultValue={contact.first_name}  name="first_name" className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" />
                                    </div>
                                    <div className="mt3">
                                        <label  className="db fw6 lh-copy f6"htmlFor="last_name"> Last Name </label>
                                        <input type="text" id="last_name" defaultValue={contact.last_name}  name="last_name" className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" />
                                    </div>
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f6" htmlFor="email"> Email </label>
                                        <input type="email" id="email" defaultValue={contact.email}  name="email" className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" />
                                    </div>
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f6" htmlFor="phone"> Phone </label>
                                        <input type="text" id="phone" defaultValue={contact.phone} name="phone" className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"  />
                                    </div>
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f6" htmlFor="address"> Address </label>
                                        <input type="text" id="address" defaultValue={contact.address}  name="address" className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"  />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                }
        </div>
    )
}

export default ContactDetails;