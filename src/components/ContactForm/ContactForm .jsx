import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { Form, Label, Field, Button } from './ContactForm-styled';
import * as yup from 'yup';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from '../../redux/contactsSlice';
import toast, { Toaster } from 'react-hot-toast';
import { ColorRing } from 'react-loader-spinner';

yup.addMethod(yup.string, 'numeric', function () {
  return this.matches(/^\d+$/, 'The field should have digits only');
});

const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  phone: yup.string().numeric().min(12).required(),
});

const initialValues = {
  name: '',
  phone: '',
};

export const ContactForm = () => {
  const [addContact, { isLoading: addLoading }] = useAddContactMutation();
  const { data: contacts, error: errorFetch } = useFetchContactsQuery();

  const handleSubmit = async (values, { resetForm }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      return toast.error(`${values.name} is already in contacts.`);
    }
    try {
      await addContact(values);
      toast.success('Контакт додано успішно');
    } catch (error) {
      toast.error(`Помилка ${errorFetch}, контакт не доданий`);
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <Label>
          Name
          <Field
            type="text"
            name="name"
            placeholder="Enter your name..."
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <ErrorMessage name="name" component="div" />
        <Label>
          Phone
          <Field
            type="tel"
            name="phone"
            placeholder="Enter your tel..."
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <ErrorMessage name="phone" component="div" />
        <Button type="submit">Add contact</Button>
        <Toaster />
        {addLoading && <ColorRing />}
      </Form>
    </Formik>
  );
};
