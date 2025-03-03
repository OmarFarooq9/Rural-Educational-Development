import React from 'react';

export default function ContactInfo() {
  return (
    <section className="flex flex-col justify-center items-start px-16 py-6 mt-32 w-full text-4xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 max-w-full w-[798px]">
        <address className="grow shrink w-[352px] not-italic">
          Email: <a href="mailto:balnirman@gmail.com" className="hover:text-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-700 rounded">balnirman@gmail.com</a>
        </address>
        <p className="grow shrink w-[217px]">
          Phone: <a href="tel:9823546782" className="hover:text-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-700 rounded">9823546782</a>
        </p>
      </div>
    </section>
  );
}