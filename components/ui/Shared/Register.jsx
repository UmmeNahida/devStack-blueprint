import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="flex items-center justify-center">
      <div className=" w-6/12 mx-auto bg-amber-100 p-3 grid grid-cols-1 justify-center items-center">
        <label>
          First name:
          <input
            className="py-2 px-1 outline-1 border border-gray-500 w-full"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last name:
          <input
            name="lastName"
            value={person.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            value={person.email}
            onChange={handleChange}
          />
        </label>
        <p>
          {person.firstName} {person.lastName} ({person.email})
        </p>
      </div>
    </div>
  );
}
