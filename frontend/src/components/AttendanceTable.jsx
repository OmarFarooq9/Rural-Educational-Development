import React from 'react';

export default function AttendanceTable() {
  const students = [
    {
      name: 'PRANSHU AGARVAL',
      week: 'Week 1',
      attendance: {
        mon: 'Present',
        tue: 'Absent',
        //<FILE path="components/attendance/AttendanceTable.jsx"> (continued)
        wed: 'Absent',
        thu: 'Present',
        fri: 'Present'
      }
    },
    {
      name: 'PRANSHU AGARVAL',
      week: 'Week 2',
      attendance: {
        mon: 'Present',
        tue: 'Absent',
        wed: 'Present',
        thu: 'Present',
        fri: 'Present'
      }
    },
    {
      name: 'PRANSHU AGARVAL',
      week: 'Week 3',
      attendance: {
        mon: 'Present',
        tue: 'Present',
        wed: 'Present',
        thu: 'Present',
        fri: 'Absent'
      }
    },
    {
      name: 'PRANSHU AGARVAL',
      week: 'Week 4',
      attendance: {
        mon: 'Absent',
        tue: 'Absent',
        wed: 'Present',
        thu: 'Present',
        fri: ''
      }
    }
  ];

  return (
    <section className="flex flex-wrap gap-5 justify-between items-start px-16 pt-9 pb-4 mt-3.5 w-full text-xl bg-slate-400 max-w-[1288px] rounded-[57px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-start self-stretch text-blue-950 text-opacity-50">
        <div className="flex gap-5 justify-between self-stretch font-medium whitespace-nowrap text-blue-950 text-opacity-80">
          <h3>Name</h3>
          <div className="shrink-0 w-px border border-solid border-blue-950 border-opacity-30 h-[23px]" />
        </div>
        {students.map((student, index) => (
          <div key={index} className={`mt-${index === 0 ? '14' : '6'} max-md:mt-${index === 0 ? '10' : '6'}`}>
            {student.name}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start text-blue-950 text-opacity-50">
        <div className="flex gap-5 justify-between self-stretch font-medium whitespace-nowrap text-blue-950 text-opacity-80 max-md:ml-2">
          <h3>WEEK</h3>
          <div className="shrink-0 w-px border border-solid border-blue-950 border-opacity-30 h-[23px]" />
        </div>
        {students.map((student, index) => (
          <div key={index} className={`mt-${index === 0 ? '14' : '6'} max-md:mt-${index === 0 ? '10' : '6'}`}>
            {student.week}
          </div>
        ))}
      </div>

      {['mon', 'tue', 'wed', 'thu', 'fri'].map((day, dayIndex) => (
        <div key={day} className="flex flex-col items-start whitespace-nowrap text-blue-950 text-opacity-50">
          <div className="flex gap-5 justify-between self-stretch font-medium text-blue-950 text-opacity-80 max-md:ml-2">
            <h3 className="capitalize">{day}</h3>
            <div className="shrink-0 w-0.5 border border-solid border-blue-950 border-opacity-30 h-[23px]" />
          </div>
          {students.map((student, index) => (
            <div
              key={`${student.name}-${day}`}
              className={`mt-${index === 0 ? '14' : '6'} ${
                student.attendance[day] === 'Absent' ? 'text-red-600 text-opacity-70' : ''
              } max-md:mt-${index === 0 ? '10' : '6'}`}
            >
              {student.attendance[day]}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}