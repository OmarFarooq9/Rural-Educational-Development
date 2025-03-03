import React from 'react';

const months = ['March', 'April', 'May'];

export default function MonthSelector() {
  return (
    <section className="flex flex-col self-center pt-14 pb-3 pl-2.5 mt-3.5 max-w-full bg-slate-400 rounded-[63px] w-[789px]">
      <div className="flex flex-wrap gap-2.5 items-start w-full h-[82px] max-md:mr-0 max-md:max-w-full">
        {months.map((month, index) => (
          <div
            key={index}
            className="flex gap-4 items-center p-3 bg-white rounded-xl min-h-[90px] min-w-[240px] shadow-[0px_4px_70px_rgba(0,0,0,0.15)] w-[250px]"
          >
            <div className="flex flex-col self-stretch my-auto rounded-none w-[69px]">
              <div className={`flex shrink-0 rounded-lg ${index % 2 === 0 ? 'bg-amber-400' : 'bg-sky-300'} bg-opacity-10 h-[69px] w-[69px]`} />
            </div>
            <div className="self-stretch my-auto text-xl font-black tracking-wider text-blue-950 text-opacity-80">
              {month}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}