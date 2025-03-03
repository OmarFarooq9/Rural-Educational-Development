import React from 'react';

export default function ContactForm() {
  return (
    <form className="flex flex-col mt-28 ml-9 max-w-full text-4xl whitespace-nowrap w-[931px] max-md:mt-10" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-wrap gap-3 px-10 py-4 bg-purple-200 rounded-[63px] max-md:px-5 max-md:mr-0.5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/89798c798e204ff575cc5f405831cdc0cbd9650b15ed60ddb6e68e6b4ef05e87?placeholderIfAbsent=true&apiKey=23f4468dc3a042f09b7fc5956a477b5a" alt="" className="object-contain shrink-0 my-auto aspect-square w-[35px]" />
        <label htmlFor="name" className="sr-only">Name</label>
        <input
          type="text"
          id="name"
          className="flex-auto w-[800px] max-md:max-w-full bg-transparent focus:outline-none"
          placeholder="Name"
          required
        />
      </div>
      
      <div className="flex flex-wrap gap-4 px-11 py-4 mt-7 bg-purple-200 rounded-[63px] max-md:px-5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c401ab6bf009b2516a5ae3bbe8e3113f7954baa25f8fcc40f4ec172b2e979e7d?placeholderIfAbsent=true&apiKey=23f4468dc3a042f09b7fc5956a477b5a" alt="" className="object-contain shrink-0 my-auto aspect-[1.28] w-[23px]" />
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          id="email"
          className="flex-auto w-[798px] max-md:max-w-full bg-transparent focus:outline-none"
          placeholder="Email"
          required
        />
      </div>
      
      <div className="mt-6">
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          className="w-full px-16 pt-4 pb-32 bg-violet-200 rounded-[53px] max-md:px-5 max-md:pb-28 max-md:max-w-full resize-none focus:outline-none"
          placeholder="Message"
          required
        />
      </div>
      
      <button
        type="submit"
        className="self-center px-16 py-3 mt-12 max-w-full text-2xl bg-emerald-200 rounded-[38px] w-[214px] max-md:px-5 max-md:mt-10 hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        Submit
      </button>
    </form>
  );
}