import React from 'react';
import { NavigationItem } from './Registration/components/registration/NavigationItem';
import { FormInput } from './FormInput';

const navItems = [
  { text: 'HOME', className: 'px-16' },
  { text: 'ASSESSMENT', className: '' },
  { text: 'ATTENDANCE', className: 'px-8' },
  { text: 'OTHERS', className: 'px-14' }
];

export default function RegistrationPage() {
  return (
    <main className="flex overflow-hidden flex-col bg-slate-300">
      <header className="flex overflow-hidden flex-wrap gap-5 justify-between items-center px-7 py-2.5 w-full font-bold leading-none text-center bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex self-stretch text-3xl text-indigo-900 whitespace-nowrap">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eefe4f269b31cd71ad2e4e7cf901b20be193a3399a171c75dd7f4009f7418005?placeholderIfAbsent=true&apiKey=23f4468dc3a042f09b7fc5956a477b5a" alt="Balnirman Logo" className="object-contain shrink-0 aspect-[1.29] w-[72px]" />
          <h1 className="self-start mt-3.5 border-black basis-auto rotate-[1.1102230246251565e-16rad]">
            BALNIRMAN
          </h1>
        </div>
        
        <nav className="flex flex-wrap gap-9 self-stretch my-auto text-base whitespace-nowrap text-blue-950 max-md:max-w-full">
          {navItems.map((item, index) => (
            <NavigationItem key={index} text={item.text} className={item.className} />
          ))}
        </nav>

        <div className="flex flex-col self-stretch my-auto text-xl">
          <button className="rotate-[1.1102230246251565e-16rad] max-md:mr-1">
            Login/Sign up
          </button>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0780a6b76acddd6f00a44884d48ab53c4f1de3f6cdfd9bccc4ab6a3d25962ac1?placeholderIfAbsent=true&apiKey=23f4468dc3a042f09b7fc5956a477b5a" alt="" className="object-contain aspect-[15.87] w-[126px]" />
        </div>
      </header>

      <section className="z-10 w-full max-w-[1417px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fd5ebbd91cbb4a8e02e64a13b8627b96484ec9e25318d60ff927277c9ee2da2?placeholderIfAbsent=true&apiKey=23f4468dc3a042f09b7fc5956a477b5a" alt="Registration illustration" className="object-contain grow w-full aspect-[0.97] max-md:mt-6 max-md:max-w-full" />
          </div>
          
          <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
            <form className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/84dfb019910f0fe5105808e6137962fb7cee7906ac1c861afa76ed24243aa2e9?placeholderIfAbsent=true&apiKey=23f4468dc3a042f09b7fc5956a477b5a" alt="Registration form logo" className="object-contain self-center w-40 max-w-full aspect-[1.29]" />
              <h2 className="self-center text-3xl font-bold tracking-widest text-blue-950 text-opacity-80">
                Registration Form
              </h2>
              
              <p className="self-center mt-1.5 text-sm font-medium text-black">
                <span className="text-blue-950">Already have an account? </span>
                <button className="font-semibold text-amber-400">Login</button>
              </p>

              <div className="flex gap-5 justify-between mt-9 max-md:max-w-full">
                <FormInput id="firstName" label="First Name *" />
                <FormInput id="lastName" label="Last Name *" />
              </div>

              <div className="mt-7">
                <FormInput id="email" label="Enter Email *" type="email" />
              </div>

              <div className="mt-7">
                <FormInput id="confirmEmail" label="Confirm Email *" type="email" />
              </div>

              <div className="flex gap-5 justify-between mt-7 max-md:max-w-full">
                <FormInput id="phone" label="Phone Number *" type="tel" />
                <FormInput id="studentId" label="ID*" />
              </div>

              <div className="flex gap-5 justify-between mt-7 w-full text-center whitespace-nowrap max-md:max-w-full">
                <fieldset className="flex gap-7 my-auto text-base tracking-wider text-blue-950 text-opacity-80">
                  <legend className="sr-only">Gender</legend>
                  <label className="flex gap-2">
                    <input type="radio" name="gender" value="male" className="flex shrink-0 my-auto w-3 h-3 bg-white border border-solid border-blue-950 border-opacity-40" />
                    Male
                  </label>
                  <label className="flex gap-2">
                    <input type="radio" name="gender" value="female" className="flex shrink-0 my-auto w-3 h-3 border border-solid border-blue-950 border-opacity-40" />
                    Female
                  </label>
                </fieldset>

                <select className="flex gap-10 py-3.5 pr-1.5 pl-8 text-sm tracking-wider rounded-md border border-solid bg-white bg-opacity-30 border-blue-950 border-opacity-40 text-blue-950 text-opacity-30 max-md:pl-5">
                  <option value="">CLASS</option>
                </select>
              </div>

              <button type="submit" className="self-center px-16 py-2.5 mt-20 max-w-full text-2xl tracking-wider text-center text-white whitespace-nowrap rounded-md border border-solid bg-slate-600 border-blue-950 w-[212px] max-md:px-5 max-md:mt-10">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}