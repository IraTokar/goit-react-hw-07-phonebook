
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectContact } from 'components/redux/selectors';
import { addContact } from 'components/redux/operations';

import { Form, Input, Button } from './ContactsForm.styled';



const nameId = nanoid();
const numberId = nanoid();

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContact);
  
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const anExistingContact = contacts.some(contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim());
  
  if (anExistingContact) {
    alert(`${name} is already in contacts`);
    return;
  }
  
  dispatch(addContact({ name, number }));
  setName('');
  setNumber('');
  };
  
  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

return (
  <Form onSubmit = {handleSubmit}>
    <label htmlFor={nameId}>Name</label>
        <Input type="text" name="name" value={name} onChange={handleChange} required/>
        
    

    <label htmlFor={numberId}>Number</label>
        <Input type='tel' name="number" value={number} onChange={handleChange} required/>
        

      <Button type="submit">Add contact</Button>
    

  </Form>
)
};
  
export default ContactForm;
