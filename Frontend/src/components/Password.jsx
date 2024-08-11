/* eslint-disable react/prop-types */
import { useState } from 'react';

function Password({ setPassword }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='max-w-md mx-auto space-y-6'>
      <div className='space-y-2 text-gray-700'>
        <label
          className='block text-sm font-medium'
          htmlFor='password'>
          Password
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center px-4 pointer-events-none'>
            <svg
              className='w-5 h-5 text-gray-500'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
              />
            </svg>
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            id='password'
            name='password'
            required
            autoComplete='new-password'
            placeholder='Enter password'
            className='pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md text-gray-800 focus:border-gray-400 focus:ring focus:ring-gray-400 focus:ring-opacity-50'
            onChange={e => setPassword(e.target.value)}
          />
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 hover:text-gray-600 focus:outline-none'
            aria-label={showPassword ? 'Hide password' : 'Show password'}>
            {showPassword ? (
              <svg
                className='w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21'
                />
              </svg>
            ) : (
              <svg
                className='w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Password;
