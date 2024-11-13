import { createSlice} from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
        
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.unshift(action.payload);
            })
            .addCase(addContact.rejected, handleRejected)
        
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                const index = state.items.findIndex(contact => contact.id !== action.payload.id);

                state.items.splice(index, 1)
            })
            .addCase(deleteContact.rejected, handleRejected)
    }

    }
);


export const { addContacts, removeContact } = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;