import React from 'react';

const subjects = [
  {
    title: 'Vectors',
    subject: 'Physics',
    startDate: '25TH March 2024',
    endDate: '8TH April 2024'
  },
  {
    title: 'Composition',
    subject: 'English',
    startDate: '25TH March 2024',
    endDate: '8TH April 2024'
  },
  {
    title: 'Mauryan Empire',
    subject: 'History',
    startDate: '25TH March 2024',
    endDate: '8TH April 2024'
  }
];

export default function SubjectCards() {
  return (
    <div className="mt-8 ml-6 w-full max-w-[992px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {subjects.map((item, index) => (
          <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start px-3 pt-4 pb-8 mx-auto w-full bg-gray-400 rounded-xl max-md:mt-10">
              <h3 className="text-xl font-black tracking-wider text-blue-950 text-opacity-80">
                {item.title}
              </h3>
              <div className="mt-4 text-base tracking-wide text-blue-950 text-opacity-80">
                {item.subject}
              </div>
              <div className="flex gap-10 items-start self-stretch mt-8 text-xs tracking-wide">
                <div className="flex gap-2 items-center text-slate-500">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c572cc3176ac765a044626f73583ecc1db3ccd57f102c7c63d2707f513703650?placeholderIfAbsent=true&apiKey=23f4468dc3a042f09b7fc5956a477b5a"
                    alt="Calendar icon"
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  />
                  <div className="self-stretch my-auto">{item.startDate}</div>
                </div>
                <div className="flex gap-2 items-center text-red-600 text-opacity-70">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/307fcc9c535fd3667b7b70a988a4c06a4d2fd40d6be0c8f9a733150f1268677e?placeholderIfAbsent=true&apiKey=23f4468dc3a042f09b7fc5956a477b5a"
                    alt="Calendar icon"
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  />
                  <div className="self-stretch my-auto">{item.endDate}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}