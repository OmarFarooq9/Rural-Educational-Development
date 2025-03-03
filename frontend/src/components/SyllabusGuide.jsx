import React from 'react';

const syllabusItems = [
  { title: 'Vectors', bgColor: 'bg-amber-400' },
  { title: 'Composition', bgColor: 'bg-sky-300' },
  { title: '', bgColor: 'bg-amber-400' }
];

export default function SyllabusGuide() {
  return (
    <section className="flex flex-col self-stretch px-1 pt-2.5 pb-6 mt-14 w-full bg-slate-400 rounded-[35px] max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start ml-3 text-3xl font-medium tracking-widest text-white max-md:ml-2.5">
        Syllabus Guide
      </h2>
      <div className="flex flex-wrap gap-2.5 items-start mt-14 w-full h-[90px] max-md:mt-10 max-md:-mr-1.5 max-md:max-w-full">
        {syllabusItems.map((item, index) => (
          <div
            key={index}
            className="flex grow shrink gap-4 items-center p-3 bg-white rounded-xl min-h-[90px] min-w-[240px] shadow-[0px_4px_70px_rgba(0,0,0,0.15)]"
          >
            <div className="flex flex-col self-stretch my-auto rounded-none w-[69px]">
              <div className={`flex shrink-0 rounded-lg ${item.bgColor} bg-opacity-10 h-[69px] w-[69px]`} />
            </div>
            {item.title && (
              <div className="self-stretch my-auto text-xl font-black tracking-wider text-blue-950 text-opacity-80">
                {item.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}