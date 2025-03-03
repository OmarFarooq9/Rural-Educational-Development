import React from 'react';

const rankings = [
  { rank: 1, name: 'PRANSHU AGARWAL' },
  { rank: 2, name: 'PRANSHU AGARWAL' },
  { rank: 3, name: 'PRANSHU AGARWAL' }
];

export default function StudentRankings() {
  return (
    <section className="flex flex-col items-start self-stretch my-auto w-full max-md:mt-10">
      <div className="flex gap-6 self-stretch uppercase">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/78b593828851c970b844bdb8123e2b8581e792026904e93630ccafea9732f5b6?placeholderIfAbsent=true&apiKey=23f4468dc3a042f09b7fc5956a477b5a"
          alt="Student profile"
          className="object-contain shrink-0 max-w-full aspect-square w-[110px]"
        />
        <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
          <div className="flex flex-col">
            <div className="text-2xl font-semibold tracking-wider text-blue-950 text-opacity-70">
              Pranshu AGARWAL
            </div>
            <div className="flex gap-6 items-start self-start mt-1.5 text-xs font-medium tracking-wide text-blue-950">
              <div>Present(<span className="text-lime-800">61%</span>)</div>
              <div>Absent (<span className="text-red-700">39%</span>)</div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="mt-8 text-xl text-blue-950 text-opacity-80">Student Rankings</h3>
      <div className="flex flex-col mt-2.5 max-w-full text-base w-[343px]">
        {rankings.map((item, index) => (
          <div
            key={index}
            className="flex gap-7 items-center p-2.5 w-full border border-solid bg-stone-50 bg-opacity-30 border-blue-950 border-opacity-10 shadow-[0px_2px_10px_rgba(0,0,0,0.08)]"
          >
            <div className="self-stretch pr-2 pl-2.5 my-auto whitespace-nowrap bg-amber-400 bg-opacity-60 h-[25px] min-h-[25px] rounded-[500px] text-stone-50 w-[25px]">
              {item.rank}
            </div>
            <div className="self-stretch my-auto text-blue-950 text-opacity-50">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}