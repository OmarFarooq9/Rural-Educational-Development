import React from 'react';

export default function SearchBar() {
  return (
    <div className="flex flex-col justify-center items-start self-end px-6 py-3.5 mt-12 max-w-full text-base tracking-wider whitespace-nowrap bg-gray-200 border border-solid border-neutral-200 rounded-[30px_0px_0px_30px] text-blue-950 text-opacity-30 w-[373px] max-md:px-5 max-md:mt-10">
      <div className="flex gap-5 items-center bg-gray-200">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/77c59a6d6120632cff197474431eca85cf37032ab61d81688587ff5e6d550fda?placeholderIfAbsent=true&apiKey=23f4468dc3a042f09b7fc5956a477b5a" 
          alt="Search icon" 
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[25px]" 
        />
        <label htmlFor="searchInput" className="sr-only">Search</label>
        <input
          id="searchInput"
          type="search"
          placeholder="Search..."
          className="self-stretch my-auto bg-transparent border-none outline-none"
        />
      </div>
    </div>
  );
}