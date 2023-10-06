import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    isbn: Yup.string().required('Required'),
    publicationDate: Yup.date().required('Required'),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div>
          <label>Title</label>
          <Field type="text" name="title" />
          <ErrorMessage name="title" component="div" className="error" />
        </div>

        {/* Similar fields for author, isbn, and publication date */}

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default BookForm;
