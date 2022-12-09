import React from 'react';
import { Box, Button, Info, Li } from './ContactList-styled';
import { FcInfo } from 'react-icons/fc';
import { getFilter } from '../../redux/contacts/filterSlice';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.isLoading);

  const error = useSelector(state => state.contacts.error);

  const filter = useSelector(getFilter);

  const normalizedFilterSearch = filter.toLowerCase();
  let filteredContact;

  if (contact !== undefined && contact.length > 0) {
    filteredContact = contact.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterSearch)
    );
  }

  return (
    <>
      {error && <p>Помилка `${error}`, спробуйте перезавантажити сторінку.</p>}
      {filteredContact !== undefined && filteredContact.length >= 1 && (
        <ul>
          {filteredContact.map(item => {
            return (
              <Li key={item.id}>
                <Box>
                  <Info>
                    <FcInfo size={24} />
                    {item.name} : (Tel: - {item.number})
                  </Info>
                  <Button
                    type="button"
                    onClick={() => {
                      dispatch(deleteContact(item.id));
                      toast.success('Deleted successfully');
                    }}
                    disabled={isLoading}
                  >
                    Delete
                  </Button>
                </Box>
              </Li>
            );
          })}
        </ul>
      )}
    </>
  );
};
