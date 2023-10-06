// authorform.js
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication Date is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label>Title</label>
          <Field type="text" name="title" />
          <ErrorMessage name="title" component="div" />
        </div>

        {/* Repeat the above pattern for other form fields */}
        
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default BookForm;
