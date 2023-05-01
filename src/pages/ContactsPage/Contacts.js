import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from '../../components/ContactForm/ContactForm ';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { ColorRing } from 'react-loader-spinner';
import { Section, MainTitle, ButtonContactForm } from './Contacts-styled';
import { Container } from 'styles/Container-styled';

export default function Tasks() {
  const [showContactForm, setShowContactForm] = useState(false);
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleForm = () => {
    setShowContactForm(true);
  };

  return (
    <Section>
      <Container>
        <Helmet>
          <title>Your contacts</title>
        </Helmet>
        {/* <div>{isLoading && 'Request in progress...'}</div> */}
        <MainTitle>
          Dear user, on this page you can work with your contacts
        </MainTitle>
        <ButtonContactForm onClick={handleForm}>Add contact</ButtonContactForm>
        {showContactForm && <ContactForm modal={setShowContactForm} />}
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
      </Container>
    </Section>
  );
}
