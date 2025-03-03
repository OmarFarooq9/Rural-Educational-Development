import * as React from "react";
import { TeacherContact } from "./TeacherContact";

const teachers = [
  { name: "Ms xyz", contact: "3465768798" },
  { name: "Mr abc", contact: "8005831231" }
];

export function TeachersList() {
  return (
    <section className="flex flex-col items-start py-14 pr-20 pl-9 mt-11 max-w-full text-4xl leading-none text-black bg-violet-300 rounded-[70px] w-[722px] max-md:px-5 max-md:mt-10">
      <h2 className="ml-2.5 text-6xl max-md:text-4xl">Teachers:</h2>
      {teachers.map((teacher, index) => (
        <TeacherContact key={index} name={teacher.name} contact={teacher.contact} />
      ))}
    </section>
  );
}