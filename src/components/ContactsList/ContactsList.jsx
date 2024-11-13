

import React from "react";
import { ContactsItem, Button } from './ContactsList.styled';

import { useSelector, useDispatch } from "react-redux";
import { selectVisibleContacts } from "components/redux/selectors";
import { deleteContact } from "components/redux/operations";

const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts);
    const dispatch = useDispatch();
   
    return (
        <div>
            <ul>
                {contacts && contacts.map(contact => (
                    <ContactsItem key={contact.id}>
                        {contact.name + ': ' + contact.number}
                        {<Button
                            type='button'
                            name='delete'
                            onClick={() => dispatch(deleteContact(contact.id))}
                            >delete</Button>}
                    </ContactsItem>
                ))}
            </ul>
        </div>
    )
};

export default ContactList;
