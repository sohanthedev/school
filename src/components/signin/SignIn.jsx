'use client'

import Link from 'next/link';
import React, { useState } from 'react';

const SignIn = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-buttonBgFrom to-buttonBgTo animate-fadeIn">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="drop-shadow-lg w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="drop-shadow-lg w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <Link href='#' className='block mb-2 text-end text-blue-600 cursor-pointer'> Forgot Password ? </Link>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-buttonBgFrom to-buttonBgTo text-white py-2  rounded-md hover:bg-blue-600 transition-colors duration-200"
                    >
                        Sign In
                    </button>
                </form>
                <div className='my-2 text-center '>
                    Don't have an account? <Link href='/signup' className='text-blue-600'>Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
