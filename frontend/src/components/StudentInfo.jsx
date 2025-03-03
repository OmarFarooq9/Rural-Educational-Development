import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export function StudentInfo() {
  const { id } = useParams(); // Get the student ID from URL params
  const [student, setStudent] = useState(null); // State to hold student data
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch student data from the server
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/student/${id}`);
        setStudent(response.data.data); // Assuming response contains student data
      } catch (err) {
        setError('Failed to load student data');
        console.error("Error fetching student data:", err);
      }
    };

    fetchStudentData();
  }, [id]);

  // Render loading or error message if needed
  if (error) return <p>{error}</p>;
  if (!student) return <p>Loading...</p>;

  return (
    <section className="flex flex-col items-start pl-3 text-4xl text-black max-md:max-w-full">
      <h1 className="text-5xl text-fuchsia-700 max-md:text-4xl">
        {student.name}
      </h1>
      <div className="flex flex-col items-start py-7 pr-20 pl-9 mt-7 max-w-full bg-violet-300 rounded-[53px] w-[370px] max-md:px-5">
        <p>Class: {student.sec}</p>
        <p className="mt-5">Roll No: {student.roll}</p>
      </div>
    </section>
  );
}
