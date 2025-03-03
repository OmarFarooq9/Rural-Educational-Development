import * as React from "react";

export function Navigation() {
  return (
    <nav className="flex relative flex-col items-center py-7 pr-16 pl-5 aspect-[0.342] max-md:pr-5">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3c4c048c397dfced802864388d7c1c5325aa12efed25283c7ce5c628517951c?placeholderIfAbsent=true&apiKey=23f4468dc3a042f09b7fc5956a477b5a" alt="" className="object-cover absolute inset-0 size-full" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6481cf358ecbf3aaae6ee83afc8c935e9469333c3cc69b9d680b1e584e593858?placeholderIfAbsent=true&apiKey=23f4468dc3a042f09b7fc5956a477b5a" alt="Navigation icon" className="object-contain self-start aspect-[0.75] w-[33px]" />
      <div className="relative mt-7 text-2xl tracking-widest">
        Home <br />
        <br />
        Attendance <br />
        <br />
        Assessment <br />
        <br />
        Others
      </div>
      <div className="relative text-3xl tracking-widest mt-[666px] max-md:mt-10">
        Contact Us
      </div>
    </nav>
  );
}