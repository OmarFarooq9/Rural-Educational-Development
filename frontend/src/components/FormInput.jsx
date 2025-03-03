import React from 'react';

export const FormInput = ({ id, label, type = "text", required = true }) => (
  <div className="relative">
    <label htmlFor={id} className="sr-only">{label}</label>
    <input
      id={id}
      type={type}
      required={required}
      placeholder={label}
      className="p-4 w-full text-sm tracking-wider text-center rounded-md border border-solid bg-white bg-opacity-30 border-blue-950 border-opacity-40 text-blue-950 text-opacity-30"
      aria-label={label}
    />
  </div>
);