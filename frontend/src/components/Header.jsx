import React from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
export default function Header() {
  const {id} = useParams();
  const [activeNav, setActiveNav] = useState('HOME');
  const navItems = [
    { label: 'HOME', active: false },
    { label: 'ASSESSMENT', active: false },
    { label: 'ATTENDANCE', active: false },
    { label: 'OTHERS', active: false }
  ];
  const handleNavClick = (label) => {
    setActiveNav(label); 
  };

  return (
    <header className="flex overflow-hidden gap-10 items-center px-8 py-2.5 w-full font-bold leading-none text-center bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex self-stretch text-3xl text-indigo-900 whitespace-nowrap">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eefe4f269b31cd71ad2e4e7cf901b20be193a3399a171c75dd7f4009f7418005?placeholderIfAbsent=true&apiKey=23f4468dc3a042f09b7fc5956a477b5a" alt="Balnirman logo" className="object-contain shrink-0 aspect-[1.29] w-[72px]" />
        <h1 className="self-start mt-3.5 border-black basis-auto rotate-[1.1102230246251565e-16rad]">
          SCHL
        </h1>
      </div>
      <nav className="flex flex-wrap gap-9 self-stretch my-auto text-base whitespace-nowrap text-blue-950 max-md:max-w-full">
        {navItems.map((item, index) => (
          <Link to={item.label.toLowerCase()!='others'?`/${item.label.toLowerCase()}/${id}`:`/${item.label.toLowerCase()}`}>
            <div
              onClick={() => handleNavClick(item.label)}
              key={index}
              className={`px-16 py-1.5 ${item.active ? 'bg-white' : 'bg-zinc-300'} rotate-[1.1102230246251565e-16rad] rounded-[50px] max-md:px-5`}
            >
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
      
    </header>
  );
}