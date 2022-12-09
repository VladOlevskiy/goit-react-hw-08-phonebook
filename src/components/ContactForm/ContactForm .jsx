import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { Form, Label, Field, Button } from './ContactForm-styled';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

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

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  const errorFetch = useSelector(state => state.contacts.error);
  const addLoading = useSelector(state => state.contacts.isLoading);

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
            name="number"
            placeholder="Enter your tel..."
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <ErrorMessage name="number" component="div" />
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
