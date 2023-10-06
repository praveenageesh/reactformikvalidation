import React from 'react';
import BookForm from './bookform';
import AuthorForm from './authorform';

const Dashboard = () => {
  const handleBookSubmit = (values, actions) => {
    // Handle book form submission
    // You can add logic to add or edit book records
  };

  const handleAuthorSubmit = (values, actions) => {
    // Handle author form submission
    // You can add logic to add or edit author records
  };

  return (
    <div>
      <h2>Book Management</h2>
      <BookForm initialValues={{ title: '', author: '', isbn: '', publicationDate: '' }} onSubmit={handleBookSubmit} />

      <h2>Author Management</h2>
      <AuthorForm initialValues={{ name: '', birthDate: '', biography: '' }} onSubmit={handleAuthorSubmit} />
    </div>
  );
};

export default Dashboard;
