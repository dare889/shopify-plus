import React, { useState } from 'react';

const EditProfile = ({ user }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    // Add other fields you want to edit
  });

  const { name, email } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    // Implement logic to update profile
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        {/* Add other fields */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
