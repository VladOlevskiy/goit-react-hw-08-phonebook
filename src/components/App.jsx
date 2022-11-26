import React from 'react';
import { Box } from './Box/Box';
import { ContactForm } from './ContactForm/ContactForm ';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { FcPhoneAndroid } from 'react-icons/fc';
import { useFetchContactsQuery } from '../redux/contactsSlice';
import { ColorRing } from 'react-loader-spinner';

export const App = () => {
  const { data: contact, isLoading } = useFetchContactsQuery();

  return (
    <>
      <Box paddingBottom="30px" paddingTop="30px">
        <Box
          paddingBottom="30px"
          display="flex"
          flexDirection="column"
          marginLeft="auto"
          marginRight="auto"
          alignItems="center"
          width="500px"
          boxShadow="0px 1px 7px rgb(0 0 0), 0px 1px 8px rgb(0 0 0 / 67%), 0px 2px 3px rgb(0 0 0 / 47%)"
          borderRadius="0px 0px 4px 4px"
          backgroundColor="#cbcbcb"
          marginBottom="80px"
        >
          <h1>
            <FcPhoneAndroid size={25} />
            Phonebook
          </h1>
          <ContactForm />
          <h2>Contacts</h2>
          {isLoading && <ColorRing />}
          {contact !== undefined && contact.length > 0 ? (
            <>
              {<Filter />}
              {<ContactList />}
            </>
          ) : (
            <p>No contacts here ...</p>
          )}

          {/* )} */}
        </Box>
      </Box>
    </>
  );
};
