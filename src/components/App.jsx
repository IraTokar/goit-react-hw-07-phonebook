import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContact } from './redux/selectors';
import { fetchContacts } from './redux/operations';
import ContactForm from './ContactsForm/ContactsForm';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';


export const App = () => {
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]
  );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
       
        <h2>Contacts</h2> 
        {contacts.length > 0 ? (
          <Filter />
        ) : (<p>Your phonebook is empty. Add first contact!</p>)}
        
        {contacts.length > 0 && (
          <ContactList />
        )}
        
      </div>
    )
  }

export default App;
