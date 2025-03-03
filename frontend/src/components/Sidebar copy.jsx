import React from 'react';

const navigationItems = [
  'Home',
  'Attendance',
  'Assessment',
  'Others',
  'Contact Us'
];

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
      <nav className="flex flex-col grow items-start w-full text-center text-black bg-slate-300">
        <div className="flex relative flex-col items-center py-7 pr-16 pl-5 aspect-[0.342] max-md:pr-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3c4c048c397dfced802864388d7c1c5325aa12efed25283c7ce5c628517951c?placeholderIfAbsent=true&apiKey=23f4468dc3a042f09b7fc5956a477b5a" alt="" className="object-cover absolute inset-0 size-full" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6481cf358ecbf3aaae6ee83afc8c935e9469333c3cc69b9d680b1e584e593858?placeholderIfAbsent=true&apiKey=23f4468dc3a042f09b7fc5956a477b5a" alt="Navigation icon" className="object-contain self-start aspect-[0.75] w-[33px]" />
          <ul className="relative mt-7 text-2xl tracking-widest">
            {navigationItems.map((item, index) => (
              <li key={index} className="my-4">
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-700 rounded">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}