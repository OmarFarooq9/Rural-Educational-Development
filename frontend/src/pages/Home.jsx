// Home.js
import * as React from "react";
import { Navigation } from "../components/Navigation";
import { StudentInfo } from "../components/StudentInfo";
import { TeachersList } from "../components/TeachersList";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <main className="overflow-hidden pr-20 bg-slate-300 max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <aside className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start w-full text-center text-black bg-slate-300">
            <Sidebar/>
          </div>
        </aside>
        
        <section className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow leading-none max-md:mt-10 max-md:max-w-full">
                    <h1 className="self-start text-8xl text-fuchsia-700 max-md:max-w-full max-md:text-4xl">
                      Welcome,
                    </h1>
                    <StudentInfo />
                  </div>
                </div>
                
                <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col justify-center p-9 mt-28 w-full bg-violet-300 rounded-[53px] max-md:px-5 max-md:mt-10">
                    <img 
                      loading="lazy" 
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a16061bcd4e76bf0ccc78a636d7066db9409ac97ff68d0dc29b0f67c24ed7d06?placeholderIfAbsent=true&apiKey=23f4468dc3a042f09b7fc5956a477b5a" 
                      alt="Student profile picture"
                      className="object-contain aspect-[0.74] rounded-[36px] w-[165px]" 
                    />
                  </div>
                </div>
              </div>
            </div>
              
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;