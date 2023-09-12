import React, { useState } from 'react';


const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
      <h2 className='text-5xl font-semibold'>Welcome Back </h2>
      <p className='font-medium text-lg text-gray-500 mt-4'>Welcome Back! Please enter your details</p>
      <form onSubmit={handleSubmit}>
        <div className="mt-8">
          <label className='text-lg font-medium' htmlFor="username">E-mail</label>
          <input
            className='w-full border-2  border-gray-100 rounded-xl p-4 mt-1 bg-transparent' 
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder='Enter Your E-Mail'
          />
        </div>
        <div className='mt-8'> 
          <label htmlFor="password">Password:</label>
          <input className='w-full border-2  border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter Your Password'
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className='mt-8 flex flex-col gap-y-4'> 
        <button
        className=' active:scale-[.98] active:duration-75 rounded-xl py-3 bg-violet-500 text-white text-lg font-bold'
        type="submit">Login</button>

        <button className='text-violet-500 font-bold'>Forgot Password? </button>  
        </div>      
      </form>
    </div>
  );
};

export default Form;