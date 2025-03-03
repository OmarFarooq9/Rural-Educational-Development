import React from 'react';

function AssessmentCard({ title, bgColor }) {
  return (
    <div className="flex grow shrink gap-4 items-center p-3 bg-white rounded-xl min-h-[90px] min-w-[240px] shadow-[0px_4px_70px_rgba(0,0,0,0.15)]">
      <div className="flex flex-col self-stretch my-auto rounded-none w-[69px]">
        <div className={`flex shrink-0 rounded-lg ${bgColor} h-[69px] w-[69px]`} />
      </div>
      <div className="self-stretch my-auto text-xl font-black tracking-wider text-blue-950 text-opacity-80">
        {title}
      </div>
    </div>
  );
}

export default AssessmentCard;