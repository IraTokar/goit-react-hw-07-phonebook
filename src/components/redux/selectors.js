import { createSelector } from "@reduxjs/toolkit";

export const seectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectContact = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
    [selectContact, selectFilter],
    (contacts, filter) => {
      return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
)