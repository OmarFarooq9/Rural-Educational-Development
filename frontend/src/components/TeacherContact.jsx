import * as React from "react";

export function TeacherContact({ name, contact }) {
  return (
    <div className="mt-6">
      <h3 className="text-4xl">{name}</h3>
      <p className="ml-5 max-md:ml-2.5">contact: {contact}</p>
    </div>
  );
}