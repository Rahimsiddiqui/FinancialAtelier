import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-9xl font-black text-gray-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">
          404
        </p>
        
        <p className="text-base font-semibold text-indigo-600">404 Error</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 max-w-md mx-auto">
          Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
        </p>
        
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={() => navigate('/')}
            className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all active:scale-95"
          >
            Go back home
          </button>
          <a href="mailto:financialatelier.support@gmail.com" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
