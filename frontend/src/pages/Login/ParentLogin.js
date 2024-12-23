// src/components/ParentLogin.js
import React, { useState } from 'react';
import { loginAsParent } from '../../services/authService'; // Import the auth function
import { useNavigate } from 'react-router-dom'; // Import navigate hook

function ParentLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error before each submission

    try {
      const response = await loginAsParent(email, password);
      alert(`Welcome, ${response.role}!`);
      navigate("/dashboard"); // Redirect to dashboard after login
    } catch (err) {
      setError(err.message); // Display error message if login fails
    }
  };

  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Parent Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate('/register')} // Redirect to the registration page
            className="text-blue-500 hover:text-blue-700"
          >
            Don’t have an account? Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default ParentLogin;