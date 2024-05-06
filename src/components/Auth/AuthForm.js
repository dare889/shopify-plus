import React from 'react';
import { Link } from 'react-router-dom';

const AuthForm = ({ children, title, buttonText, onSubmit }) => {
  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        {children}
        <button type="submit">{buttonText}</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default AuthForm;
