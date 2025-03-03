import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import StudentProfile from '../components/StudentProfile';
import SyllabusGuide from '../components/SyllabusGuide';
import StudentRankings from '../components/StudentRankings';
import SubjectCards from '../components/SubjectCards';
import MonthSelector from '../components/MonthSelector';
import AttendanceTable from '../components/AttendanceTable';

export default function Attendance() {
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