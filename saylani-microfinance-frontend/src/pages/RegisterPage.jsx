import React from 'react';
const RegisterPage = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form className="w-96 p-6 bg-white rounded shadow">
          <h1 className="text-xl font-bold mb-4">Register</h1>
          <div className="mb-4">
            <label className="block text-gray-700">CNIC</label>
            <input type="text" className="w-full border-gray-300 rounded p-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full border-gray-300 rounded p-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full border-gray-300 rounded p-2" />
          </div>
          <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2">
            Register
          </button>
        </form>
      </div>
    );
  };
  
  export default RegisterPage;
  