'use client';
import Link from 'next/link'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [AccType, setAccType] = useState();
  const notify = () => toast.success("Account created succefully!");
  return (
    <main className="flex flex-col h-screen items-center justify-center p-24">
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">Register</h1>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Account Type
            </label>
            <select
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            >
              <option value="volvo">Customer</option>
              <option value="saab">Vendor</option>
            </select>
          </div>
          
          <Link
            href="/forget"
            className="text-xs text-blue-600 hover:underline "
          >
            Forget Password?
          </Link>
          <Link href='/client' className="mt-2">
            <ToastContainer />
            <button onClick={notify} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Sign up
            </button>
          </Link>

        </form>
        <p className="mt-4 text-sm text-center text-gray-700">
          Already Registered?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            Login 
          </Link>
        </p>
      </div>
    </div>
    </main>
  )
}
