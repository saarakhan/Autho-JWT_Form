import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Password from './Password';

function Login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post('http://localhost:3000/login', { name, password })
      .then(result => {
        console.log(result);
        if (result.data != 'success') {
          console.log('navigating to home');
          navigate('/home');
        } else {
          console.log(result);
          alert('Login failed');
        }
      })
      .catch(err => {
        console.log('can not login! some error occured', err);
      });
  }
  return (
    <>
      <div className='flex justify-center items-center bg-gray-700 min-h-screen'>
        <div className='bg-white p-6 rounded-lg w-1/4'>
          <h2 className='text-center text-2xl font-semibold mb-4'>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-gray-700 font-bold mb-2'>
                Name
              </label>
              <input
                type='text'
                placeholder='Enter Name'
                autoComplete='off'
                name='Name'
                className='form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <Password setPassword={setPassword} />
            </div>
            <button
              type='submit'
              className='w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'>
              Login
            </button>
          </form>
          <p className='text-center mt-4'>Don&#39;t have an account?</p>
          <Link
            to='/signup'
            className='block w-full text-center mt-2 py-2 px-4 border border-gray-300 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200'>
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
