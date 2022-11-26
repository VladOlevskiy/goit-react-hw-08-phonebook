import React from 'react';
import { Box, Button, Info, Li } from './ContactList-styled';
import { FcInfo } from 'react-icons/fc';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/filterSlice';
import toast from 'react-hot-toast';

export const ContactList = () => {
  const { data: contact, error } = useFetchContactsQuery();
  const [deleteContact, result] = useDeleteContactMutation();

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
                    {item.name} : (Tel: - {item.phone})
                  </Info>
                  <Button
                    type="button"
                    onClick={() => {
                      deleteContact(item.id);
                      toast.success('Deleted successfully');
                    }}
                    disabled={result.isLoading}
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
