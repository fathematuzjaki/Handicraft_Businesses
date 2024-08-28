import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        email,
        password,
      });
  
      // Handle success (e.g., save the token and navigate to a protected page)
      console.log('Login successful:', response.data);
      // You might want to save the token to localStorage or context
      // localStorage.setItem('token', response.data.token);
      navigate('/'); // Or any protected route
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
      // You might want to display an error message to the user here
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-gray-100"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-gray-100"
            required
          />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">Login</button>
      </form>
      <div className="text-center mt-4">
        <p className="text-gray-700 dark:text-gray-300">Or login with:</p>
        <button className="bg-red-500 text-white py-2 px-4 rounded mt-2">Google</button>
        <button className="bg-gray-900 text-white py-2 px-4 rounded mt-2 ml-2 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500">
          GitHub
        </button>
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-700 dark:text-gray-300">Don't have an account?</p>
        <button
          onClick={handleRegisterRedirect}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 mt-2"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
