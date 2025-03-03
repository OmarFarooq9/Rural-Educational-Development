import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import StudentProfile from './StudentProfile';
import SyllabusGuide from './SyllabusGuide';
import StudentRankings from './StudentRankings';
import SubjectCards from './SubjectCards';
import MonthSelector from './MonthSelector';
import AttendanceTable from './AttendanceTable';

export default function AttendanceLayout() {
  return (
    <main className="flex overflow-hidden flex-col bg-slate-300">
      <Header />
      <SearchBar />
      <section className="flex flex-col pr-8 pl-20 mt-6 w-full max-md:px-5 max-md:max-w-full">
        <div className="self-end w-full max-w-[1307px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
              <StudentProfile />
              <SyllabusGuide />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <StudentRankings />
            </div>
          </div>
        </div>
        <SubjectCards />
        <MonthSelector />
        <AttendanceTable />
      </section>
    </main>
  );
}