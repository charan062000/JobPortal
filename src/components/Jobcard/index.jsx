import React from "react";
import dayjs from "dayjs";
const Jobcard = (props) => {
  const skills = ["html", "css", "javascript", "react", "tailwindcss"];
  const Date1 = dayjs(Date.now());
  const diffInDays = Date1.diff(props.postedOn, "day");
  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-1 hover:scale-103">
        <div className="flex flex-col items-start gap-3 ">
          <h1 className="text-lg font-semibold">
            {props.title} - {props.company}
          </h1>
          <p className="text-sm text-gray-600">
            {props.type} • {props.experience} • {props.location}
          </p>
          <div className="flex items-center gap-2 ">
            {skills.map((skill) => (
              <p
                key={skill}
                className="text-gray-500 px-2 py-1 rounded-md border border-black"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-500">
            posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`}{" "}
            ago
          </p>
          <a href={props.job_link}>
            <button className="text-blue-500  px-10 py-2 rounded-md border border-blue-500 ">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jobcard;
