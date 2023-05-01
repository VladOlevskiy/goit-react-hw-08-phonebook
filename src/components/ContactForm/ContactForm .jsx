import React from 'react';
import { useEffect } from 'react';
import { Formik, ErrorMessage } from 'formik';
import {
  Form,
  Field,
  Button,
  ModalOverlay,
  ModalContainer,
  WrapperCloseBtn,
  BtnCloseModal,
  PlaceHolder,
  BoxInput,
  IconCloseModal,
} from './ContactForm-styled';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { createPortal } from 'react-dom';

yup.addMethod(yup.string, 'numeric', function () {
  return this.matches(/^\d+$/, 'The field should have digits only');
});

const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  number: yup.string().numeric().min(12).required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ modal }) => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  const errorFetch = useSelector(state => state.contacts.error);

  const handleSubmit = async (values, { resetForm }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      return toast.error(`${values.name} is already in contacts.`);
    }
    try {
      await dispatch(addContact(values));
      toast.success('Контакт додано успішно');
    } catch (error) {
      toast.error(`Помилка ${errorFetch}, контакт не доданий`);
    }
    resetForm();
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      modal(false);
    }
  };
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      modal(false);
      console.log('ESC');
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return createPortal(
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContainer>
        <WrapperCloseBtn>
          <div>
            <BtnCloseModal onClick={() => modal(false)}>
              <IconCloseModal size={35} />
            </BtnCloseModal>
          </div>
        </WrapperCloseBtn>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form>
            <div style={{ width: '87%' }}>
              <BoxInput style={{ marginBottom: '60px' }}>
                <Field
                  type="text"
                  name="name"
                  // placeholder="Enter your name..."
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  style={{ color: '#ffff00d6', fontSize: '15px' }}
                />
                <PlaceHolder>Enter your name...</PlaceHolder>
              </BoxInput>

              <BoxInput>
                <Field
                  type="tel"
                  name="number"
                  // placeholder="Enter your tel..."
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
                <ErrorMessage
                  name="number"
                  component="span"
                  style={{ color: '#ffff00d6', fontSize: '15px' }}
                />
                <PlaceHolder>Enter your tel...</PlaceHolder>
              </BoxInput>
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
              }}
            >
              <Button type="submit">Add contact</Button>
              <Button onClick={() => modal(false)} type="button">
                Cancel
              </Button>
            </div>
          </Form>
        </Formik>
      </ModalContainer>
    </ModalOverlay>,
    document.body
  );
};
