import React from 'react';
import {
  Button,
  List,
  Item,
  WrapperImg,
  Img,
  LinkTel,
  IconPhone,
  Title,
  WrapperInfo,
  Name,
  WrapperText,
} from './ContactList-styled';
import { getFilter } from '../../redux/contacts/filterSlice';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { user_icon } from 'media';
import { useState } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const [aa, setAa] = useState(false);
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
        <List>
          {filteredContact.map(item => {
            let telLink = `tel:${item.number}`;
            return (
              <Item key={item.id}>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <WrapperImg>
                    <Img src={user_icon} alt="user icon" />
                    <WrapperText>
                      {!aa && (
                        <Button
                          type="button"
                          onClick={() => {
                            setAa(true);
                          }}
                          disabled={isLoading}
                        >
                          Delete
                        </Button>
                      )}
                      {aa && (
                        <>
                          <Button
                            type="button"
                            onClick={() => {
                              dispatch(deleteContact(item.id));
                              toast.success('Deleted successfully');
                            }}
                            disabled={isLoading}
                            style={{ marginRight: '10px' }}
                          >
                            Delete
                          </Button>
                          <Button
                            type="button"
                            onClick={() => {
                              setAa(false);
                            }}
                            disabled={isLoading}
                          >
                            Cancel
                          </Button>
                        </>
                      )}
                    </WrapperText>
                  </WrapperImg>
                  <WrapperInfo>
                    <Title>Name :</Title>
                    <Name>{item.name}</Name>
                  </WrapperInfo>
                  <WrapperInfo>
                    <Title>Phone :</Title>
                    <LinkTel href={telLink}>
                      <IconPhone /> {item.number}
                    </LinkTel>
                  </WrapperInfo>
                </div>
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
};
