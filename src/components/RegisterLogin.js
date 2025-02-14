import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterLogin.css';

function RegisterLogin() {
  const [isLoginPage, setIsLoginPage] = useState(true); // Toggle between login and register
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    loginUsername: '',
    loginPassword: '',
  });

  const navigate = useNavigate();

  // Handles input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate password strength
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  };

  // Handle registration form submission
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const { firstName, surname, username, email, password } = formData;

    if (!firstName || !surname || !username || !email || !password) {
      alert('All fields are required!');
      return;
    }

    if (!validatePassword(password)) {
      alert(
        'Password must be at least 8 characters long and include at least 1 number, 1 special character, 1 uppercase, and 1 lowercase letter.'
      );
      return;
    }

    // Save user info (can be stored in localStorage for now)
    localStorage.setItem('user', JSON.stringify({ username, password, email }));
    alert('Registration successful! Please log in.');
    setIsLoginPage(true); // Redirect to login page
  };

  // Handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { loginUsername, loginPassword } = formData;

    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (!savedUser || savedUser.username !== loginUsername || savedUser.password !== loginPassword) {
      alert('Invalid username or password!');
      return;
    }

    alert(`Welcome back, ${savedUser.username}!`);
    navigate('/landing'); // Redirect to the landing page
  };

  return (
    <div className="register-login">
      {isLoginPage ? (
        <form className="form login-form" onSubmit={handleLoginSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="loginUsername"
              value={formData.loginUsername}
              onChange={handleInputChange}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="loginPassword"
              value={formData.loginPassword}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <p>
            Don't have an account?{' '}
            <span className="link" onClick={() => setIsLoginPage(false)}>
              Register here
            </span>
          </p>
        </form>
      ) : (
        <form className="form register-form" onSubmit={handleRegisterSubmit}>
          <h2>Register</h2>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="form-group">
            <label>Surname</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              placeholder="Enter your surname"
              required
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter a username"
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create a password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <p>
            Already have an account?{' '}
            <span className="link" onClick={() => setIsLoginPage(true)}>
              Login here
            </span>
          </p>
        </form>
      )}
    </div>
  );
}

export default RegisterLogin;
