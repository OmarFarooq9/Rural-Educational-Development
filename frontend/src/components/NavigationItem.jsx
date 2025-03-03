import React from 'react';

function NavigationItem({ label, active }) {
  return (
    <div className={`px-9 py-1.5 ${active ? 'bg-white' : 'bg-zinc-300'} rounded-[50px] max-md:px-5`}>
      {label}
    </div>
  );
}

export default NavigationItem;