import React from 'react';
import Sidebar from './Sidebar';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactLayout() {
  return (
    <main className="overflow-hidden bg-slate-300">
      <div className="flex gap-5 max-md:flex-col">
        <Sidebar />
        <section className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-20 leading-none text-black max-md:mt-10 max-md:max-w-full">
            <h1 className="self-center text-7xl leading-none text-fuchsia-700 max-md:max-w-full max-md:text-4xl">
              CONTACT US
            </h1>
            <ContactForm />
            <ContactInfo />
          </div>
        </section>
      </div>
    </main>
  );
}