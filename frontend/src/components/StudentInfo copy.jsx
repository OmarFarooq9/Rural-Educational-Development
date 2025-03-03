import * as React from "react";

export function StudentInfo() {
  return (
    <section className="flex flex-col items-start pl-3 text-4xl text-black max-md:max-w-full">
      <h1 className="text-5xl text-fuchsia-700 max-md:text-4xl">
        Mr. Pranshu Agarwal
      </h1>
      <div className="flex flex-col items-start py-7 pr-20 pl-9 mt-7 max-w-full bg-violet-300 rounded-[53px] w-[370px] max-md:px-5">
        <p>Class : 12 - B</p>
        <p className="mt-5">Roll No : 21</p>
      </div>
      <p className="self-stretch mt-7 max-md:max-w-full">
        School : St. Francis' College , Lucknow
      </p>
    </section>
  );
}