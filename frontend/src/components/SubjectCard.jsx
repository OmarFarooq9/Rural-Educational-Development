import React from 'react';

const rankings = [
  { position: 1, name: "PRANSHU AGARWAL" },
  { position: 2, name: "PRANSHU AGARWAL" },
  { position: 3, name: "PRANSHU AGARWAL" }
];

function StudentRankings() {
  return (
    <div className="flex flex-col mt-2.5 max-w-full w-[343px]">
      {rankings.map((rank, index) => (
        <div key={index} className="flex gap-7 items-center p-2.5 w-full border border-solid bg-stone-50 bg-opacity-30 border-blue-950 border-opacity-10 shadow-[0px_2px_10px_rgba(0,0,0,0.08)]">
          <div className="self-stretch pr-2 pl-2.5 my-auto whitespace-nowrap bg-amber-400 bg-opacity-60 h-[25px] min-h-[25px] rounded-[500px] text-stone-50 w-[25px]">
            {rank.position}
          </div>
          <div className="self-stretch my-auto text-blue-950 text-opacity-50">
            {rank.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudentRankings;