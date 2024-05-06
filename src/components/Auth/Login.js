import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  const navigate = useNavigate();

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    // Call login action or API endpoint
    console.log(formData);
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('username', username);
    navigate('/'); // Back to Home page
  };

  const handleGoogleLogin = () => {
    // Construct the Google OAuth 2.0 authorization URL
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
      `scope=email%20profile&` +
      `access_type=offline&` +
      `include_granted_scopes=true&` +
      `response_type=code&` +
      `redirect_uri=http://localhost:3000&` +
      `client_id=865249728890-ed6s1ll9ugrkofsdb3icpu6lt56r1uuu.apps.googleusercontent.com`;
  
    // Redirect the user to the authorization URL
    window.location.href = authUrl;
  };

  const handleFacebookLogin = () => {
    // Redirect the user to Facebook's OAuth 2.0 authentication endpoint
    window.location.href = 'https://www.facebook.com/v12.0/dialog/oauth' +
      '?response_type=code' +
      '&client_id=YOUR_FACEBOOK_APP_ID' + // Replace with your Facebook app ID
      '&redirect_uri=http://localhost:3000' + // Replace with your redirect URI
      '&scope=email'; // Specify the scopes you need
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
      <div>
        <button onClick={handleGoogleLogin}>Sign In with Google</button>
        
        <button onClick={handleFacebookLogin}>Sign In with Facebook</button>
      </div>
    </div>
  );
};

export default Login;
