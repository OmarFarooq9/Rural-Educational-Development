import React from 'react';

function SubjectCard({ chapter, subject, date }) {
  return (
    <div className="flex flex-col items-start pt-4 pr-14 pb-8 pl-3 w-full bg-gray-400 rounded-xl text-blue-950 text-opacity-80 max-md:pr-5">
      <div className="text-xl font-black tracking-wider">{chapter}</div>
      <div className="mt-4 text-base tracking-wide">{subject}</div>
      <div className="flex gap-10 items-start mt-8 text-xs tracking-wide text-slate-500">
        <div className="flex gap-2 items-center">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad71749c974548b98e991097f81116f8bc029a846c74d682cf64c807b9511326?placeholderIfAbsent=true&apiKey=23f4468dc3a042f09b7fc5956a477b5a" alt="Calendar icon" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
          <div className="self-stretch my-auto">{date}</div>
        </div>
      </div>
    </div>
  );
}

export default SubjectCard;