import React from 'react';

const studentData = [
  {
    name: "PRANSHU AGARVAL",
    subject: "PHYSICS",
    partA: "17",
    partB: "17",
    partC: "30",
    total: "64",
    status: true
  },
  // Add more student data here
];

function AssessmentTable() {
  return (
    <section className="flex flex-wrap gap-9 items-start px-12 pt-8 pb-24 bg-slate-400 rounded-[57px] max-md:px-5">
      <table className="w-full">
        <thead>
          <tr className="text-xl font-medium text-blue-950 text-opacity-80">
            <th className="text-left">Name</th>
            <th className="text-left">Subjects</th>
            <th className="text-left">Part A</th>
            <th className="text-left">Part B</th>
            <th className="text-left">Part C</th>
            <th className="text-left">Total</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr key={index} className="text-xl text-blue-950 text-opacity-50">
              <td>{student.name}</td>
              <td>{student.subject}</td>
              <td>{student.partA}</td>
              <td>{student.partB}</td>
              <td>{student.partC}</td>
              <td>{student.total}</td>
              <td>
                <div className={`flex shrink-0 bg-green-400 border border-solid border-blue-950 border-opacity-30 h-[23px] w-[23px]`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default AssessmentTable;